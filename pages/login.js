import { useState } from 'react';
import Router from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is successful (status code 2xx)
      if (!res.ok) {
        throw new Error('Failed to authenticate');
      }

      const data = await res.json();
      setIsLoading(false);

      if (data.success) {
        // Redirect to the dashboard or another page after a successful login
        Router.push('/dashboard');
      } else {
        setError(data.message || 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Access your account and enjoy playing!</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <p className={styles.linkText}>
            Forgot your password?{' '}
            <a href="/reset-password" className={styles.link}>
              Reset here
            </a>
          </p>
          <p className={styles.linkText}>
            Don’t have an account?{' '}
            <a href="/register" className={styles.link}>
              Register now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
