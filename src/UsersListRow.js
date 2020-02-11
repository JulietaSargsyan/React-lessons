import React from 'react';
class UsersListRow extends React.Component {
    render() {
        return (
            <div className='item'>
                <b>Phone: </b>{this.props.user.phone}
                <button onClick={this.props.onRemove}>Delete</button>
            </div>
        )
    }
}

export default UsersListRow;