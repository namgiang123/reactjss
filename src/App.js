import React, { Component } from 'react';
import './App.css';
import Mot from './Components/Mot';
import Hai from './Components/Hai';
import DataUser from './Components/Data.json'; 
import Search from './Components/Search';
import AddUser from './Components/AddUser';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: [],
      statusSearch:'',
      statusEdit: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    // check localstorage
    if(localStorage.getItem('userData') === null ){
      localStorage.setItem('userData',JSON.stringify(DataUser))
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data : temp
      });
    }
  }
  
  // set state Edit form
  statusChangeEdit = () => {
    this.setState({
      statusEdit: !this.state.statusEdit
      
    });
  }
  //set state
  statusChange = () => {
    this.setState({
      status: !this.state.status
      
    });
  }

  // Search
  checkedSearch = (dl) => {
    this.setState({
      statusSearch: dl
    });
  }

  //AdUser
  getAddUser = (name, permission, tel) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.permission = parseInt(permission);
    item.tel = tel;
    //push to data
    var items = this.state.data;
    items.push(item);
    // reset data
    this.setState({
      data : items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }

  //edit user
  editUser = (user) => {

    this.setState({
      userEditObject: user
    });
  }
  getEditUserInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.permission = info.permission;
        value.tel = info.tel;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  //delete
  deleteUser = (userID) => {
    var tempData = this.state.data.filter(item => item.id !== userID)
    this.setState({ data : tempData });
    localStorage.setItem('userData',JSON.stringify(tempData));
  };
  render() {
    var searchShow = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.statusSearch) !== -1){
        searchShow.push(item);
      }
    })
    return (
      <div>
        <div className="App">
          
          <Search getValueSearch = {(dl) => {this.checkedSearch(dl)}}></Search>
          <Mot statusForm={this.state.status} formShow={() => {this.statusChange()}} 
            statusEdit={this.state.statusEdit} formShowEdit={() => this.statusChangeEdit()}
            userEditObject = {this.state.userEditObject}
            getEditUserInfoApp = {(info) => this.getEditUserInfoApp(info)}></Mot>
          <AddUser statusForm={this.state.status} formShow={() => {this.statusChange()}} addUser={(name, permission, tel) => this.getAddUser(name, permission, tel)}></AddUser>
          <Hai sendEditUser={(user) => {this.editUser(user)}} 
          statusForm={this.state.status} 
          formShow={() => {this.statusChange()}} dataUserProps={searchShow}
          formShowEdit={() => this.statusChangeEdit()}
          deleteUser = {(userID) => {this.deleteUser(userID)}} ></Hai>
        </div>
      </div>
    );
  }
}

export default App;
