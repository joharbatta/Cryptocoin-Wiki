import React, { Component } from 'react';
class Form extends Component {
    state = {
        name: null
    }
    changeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.add(this.state.name);
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this.submitHandler} >
                    <input type="text" placeholder="Enter the Crypto Currency Name" className="form-input" 
                    onChange={this.changeHandler.bind(this)}></input>
                    <button className="form-btn">Get Info About Coin</button>
                </form>
            </div>
        )
    }
}
export default Form;