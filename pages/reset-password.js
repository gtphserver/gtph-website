import { useState } from 'react';
import Router from 'next/router';
import styles from '../styles/ResetPassword.module.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      setIsLoading(false);

      if (data.success) {
        setSuccess('Password reset link sent to your email.');
        setTimeout(() => Router.push('/login'), 3000); // Redirect after 3 seconds
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Reset Your Password</h1>
        <p className={styles.subtitle}>
          Enter your registered email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <button 
            type="submit" 
            className={styles.button} 
            disabled={isLoading || !email}
          >
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
