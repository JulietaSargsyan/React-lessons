import React from 'react';
import logo from './logo.svg';
import './App.css';
import {users} from './data/users';

import UsersList from './UsersList';

class App extends React.Component {
  state = {
    name: 'Julieta',
    users: users
  }

  constructor(props) {
    super(props);
  }

  handleRemove = (userId) => {
    const tempUsers = [...this.state.users];

    const index = tempUsers.findIndex(user => user._id === userId);
    if (index > -1) {
      tempUsers.splice(index, 1);
      this.setState({
        users: tempUsers
      });
    }
    console.log('removed', userId)
  }

  render() {  
    return <UsersList
      usersData={this.state.users} 
      onRemove={this.handleRemove} 
     />
  }
}

export default App;

