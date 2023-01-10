import { createContext } from 'react';

const user = {
  id: 0,
  name: '',
  email: '',
  password: '',
  eventHistory: [],
  loggedIn: false
};

const UserContext = createContext(user);

export default UserContext;

