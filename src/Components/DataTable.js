import React, { Component } from 'react';

class DataTable extends Component {
    namePermission = () => {
        if(this.props.permission === 1){
            return "Admin"
        }else if(this.props.permission === 2){
            return "Guest"
        }
    }

    clickEditUser = () => {
        this.props.resendEditUser();
        this.props.sendFormShowEdit();
    }

    //delete user
    deleteUser = (userID) => {
        this.props.deleteUser(userID);
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.namePermission()}</td>
                <td>{this.props.tel}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" onClick={() => this.clickEditUser()} className="btn btn-warning">Sua</button>
                        <button type="button" onClick={(userID) => this.deleteUser(this.props.id)} className="btn btn-danger btn-block">Xoa</button>
                    </div>
                </td>
            </tr>
            
        );
    }
}

export default DataTable;