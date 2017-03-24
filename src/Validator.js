import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPass: '',
      warning: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)

    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    }, () => {
    if(this.state.password !== this.state.confirmPass){
      this.setState({
        warning: "Passwords do not match"
      })
    }else{
      this.setState({
        warning: 'valid'
      })
    }
    });
    console.log(value)
    // console.log(this.state.confirmPass)
    // console.log(name);

    }

  handleInputSubmit(event) {
    console.log("hello");


  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" name="email" onChange={this.handleInputChange} />
        <input type="password" placeholder="password" name="password" onChange={this.handleInputChange}/>
        <input type="password" placeholder="confirm password" name="confirmPass" onChange={this.handleInputChange}/>
        <input type="submit" value="Submit" onSubmit={this.handleInputSubmit}/>
        <p name="warning">{this.state.warning}</p>
      </div>
    );
  }
}

export default Validator;
