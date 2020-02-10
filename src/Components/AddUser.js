import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:"",
            name:"",
            permission:"",
            tel:""
        }
    }
    
    //reset form
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    checkedStatus = () => {
        if(this.props.statusForm === true){
            return(
                <div className="col">
                    <form>
                        <div className="card border-primary">
                            <div className="card-header">Them moi ten</div>
                            <div className="card-body">
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="name" name="name" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select " name="permission" onChange={(event) => this.isChange(event)}>
                                <option>Select one</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Guest</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="tel" name="tel" />
                            </div>
                            <div className="form-group col">
                                <input type="reset" value="Them moi" className="btn btn-block btn-primary" onClick={(name, permission, tel) => {this.props.addUser(this.state.name, this.state.permission, this.state.tel)}}/>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        
        return (
            <div>
                 {this.checkedStatus()}
            </div>
        );
    }
}

export default AddUser;