import React, { Component } from 'react'
import Titles from './Titles'
import Form from './Form';

import { fetchWeather } from '../../service/weather-api'

class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city:'',
            response: {},
        }
       
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    //
    changeHandler(ev) {        
        this.setState({city: ev.target.value})
        window.console.log(ev.target.value)
    }

    //
    submitHandler(ev) {
        ev.preventDefault()
        fetchWeather(this.state.city).then(res => this.setState({response: res.data}))
    }

    render() {
        return(
            <div>
                <Titles />
                <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler} />
            </div>
        );
    }
};

export default Weather;