import fs from 'fs';
import path from 'path';

const dataFile = path.resolve('data', 'users.json');

export const getUsers = () => {
  const fileData = fs.readFileSync(dataFile);
  return JSON.parse(fileData);
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
};

export const updateUser = (username, newData) => {
  const users = getUsers();
  const userIndex = users.findIndex(user => user.username === username);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...newData };
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
  }
};
