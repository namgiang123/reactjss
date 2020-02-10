import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getValueSearch(this.state.tempValue);
    }
    
    render() {
        return (
            <div className="btn-group" role="group">
                <input type="text" className="form-control" onChange={ (event) => {this.isChange(event)}} />
                <button type="button" className="btn btn-primary" onClick={ (dl) => {this.props.getValueSearch(this.state.tempValue)}}>Tim</button>
            </div>
        );
    }
}

export default Search;