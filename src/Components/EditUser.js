import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            permission : this.props.userEditObject.permission,
            tel : this.props.userEditObject.tel
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name] : value});
    }
    
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.permission = this.state.permission;
        info.tel = this.state.tel;
        
        this.props.getEditUserInfo(info)
        this.props.sendFormShowEdit()
    }
    render() {
        return (
            <div className="col">
                <form>
                    <div className="card border-primary">
                        <div className="card-header">Sua moi ten</div>
                        <div className="card-body">
                        <div className="form-group">
                            <input onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.name} type="text" className="form-control"placeholder="name" name="name" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select " name="permission" onChange={(event) => {this.isChange(event)}} defaultValue={this.props.userEditObject.permission}>
                            <option>Select one</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Guest</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => {this.isChange(event)}} type="text" className="form-control" placeholder="tel" name="tel" defaultValue={this.props.userEditObject.tel} />
                        </div>
                        <div className="form-group col">
                            <input type="button" onClick = {() => this.saveButton()} value="Sua" className="btn btn-block btn-primary" />
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;