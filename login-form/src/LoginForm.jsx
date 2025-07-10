import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    let isValid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Email validation
    if (!email.includes('@')) {
      setEmailError('Email must contain "@"');
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    if (isValid) {
      alert('Login successful!');
      // Clear fields (optional)
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '1rem auto' }}>
      <div>
        <label>Email:</label><br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
    </form>
  );
}

export default LoginForm;
