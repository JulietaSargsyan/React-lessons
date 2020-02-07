import React from 'react';
import logo from './logo.svg';
import './App.css';
import {users} from './data/users';

import UsersList from './UsersList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UsersList usersData={users} a={1} b={2} />
  }
}

export default App;

