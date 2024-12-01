import { useState } from 'react';
import Router from 'next/router';
import styles from '../styles/Register.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.success) {
        Router.push('/login');
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
        <h1 className={styles.title}>Create Your Account</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={isLoading || !email || !username || !password}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className={styles.footer}>
          Already have an account? <a href="/login" className={styles.link}>Login here</a>
        </p>
      </div>
    </div>
  );
}
