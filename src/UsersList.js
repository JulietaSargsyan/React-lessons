import React from 'react';
import UsersListRow from './UsersListRow';
class UsersList extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Users</h1>
                <div>
               {
                    this.props.usersData.map(user => {
                        return (
                            <UsersListRow key={user._id}  gagulik={user}/>
                        )
                    })
                } 
                </div>
          </div>
        )
    }
}

export default UsersList;