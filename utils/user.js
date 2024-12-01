import { getUsers, saveUser, updateUser } from './database';
import { sendEmail } from './email';

export const registerUser = (email, username, password) => {
  const users = getUsers();
  const userExists = users.find(user => user.username === username || user.email === email);
  if (userExists) {
    return { success: false, message: 'User already exists!' };
  }

  const newUser = { email, username, password };
  saveUser(newUser);
  sendEmail(email, 'Welcome to GT-PH', 'Thank you for registering!');
  return { success: true, message: 'Registration successful!' };
};

export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    return { success: true, message: 'Login successful!', user };
  }
  return { success: false, message: 'Invalid email or password!' };
};
