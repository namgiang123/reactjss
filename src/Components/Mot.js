 import React, { Component } from 'react';
import EditUser from './EditUser';
 
 class Mot extends Component {
     constructor(props) {
         super(props);
         this.state = {
             editUserObj: {}
         }
     }
     
    //get edit user
    getEditUserInfo = (info) => {
        this.setState({
            editUserObj: info
        });
        this.props.getEditUserInfoApp(info);
    }
    onlyButton = () =>{
        if(this.props.statusForm === true){
            return <button type="button" onClick={() => {this.props.formShow()}} className="btn btn-outline-secondary">Đóng lại</button>
        }else{
            return <button type="button" onClick={() => {this.props.formShow()}} className="btn btn-outline-danger">Mở ra</button>
        }
    }
    
    onlyButtonEdit = () => {
        if(this.props.statusEdit === true){
            return <EditUser sendFormShowEdit={() => this.props.formShowEdit()} 
            userEditObject = {this.props.userEditObject} 
            getEditUserInfo = {(info) => this.getEditUserInfo(info)}></EditUser>
        }
    }
     render() {
         
         
         return (
             <div>
                 {this.onlyButton()}
                 {this.onlyButtonEdit()}
             </div>
         );
     }
 }
 
 export default Mot;