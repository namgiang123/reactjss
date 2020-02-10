import React, { Component } from 'react';
import DataTable from './DataTable';

class Hai extends Component {
    //delete
    deleteUser = (userID) => {
        this.props.deleteUser(userID)
    }

    mappingDataUser = () => this.props.dataUserProps.map((value,key) => {
        return(
            <DataTable key={key} 
                id={value.id} 
                name={value.name}
                permission={value.permission}
                tel={value.tel}
                resendEditUser={(user) => this.props.sendEditUser(value)}
                sendFormShowEdit = {() => this.props.formShowEdit()} 
                deleteUser = {(userID) => this.deleteUser(userID)}
                >
            </DataTable>
        )
    })
    render() 
    {
        return (
        <div>
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>permission</th>
                    <th>tel</th>
                    <th>thao tac</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
            </table>
        </div>
        );
    }
}

export default Hai;