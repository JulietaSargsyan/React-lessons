import React from 'react';
class UsersListRow extends React.Component {
    render() {
        return (
            <div className='item'><b>Phone: </b>{this.props.gagulik.phone}</div>
        )
    }
}

export default UsersListRow;