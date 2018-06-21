import React, { Component } from 'react'

class Form extends Component {
    render() {
        return(
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <input 
                        action="#" 
                        type="search"
                        onChange={this.props.changeHandler} />
                </form>
            </div>
        )
    }
};

export default Form;