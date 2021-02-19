import React, { Component } from 'react';
import Head from 'next/head';
import { AppContext } from '../store/appContext';
import { withRouter } from 'next/router';

class LoginClassComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: '',
      inputEmailAddress: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailAdressChange = this.handleEmailAdressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    evt.preventDefault();
    const value = evt.target.value;
    this.setState({ inputName: value})
  }

  handleEmailAdressChange (evt) {
    evt.preventDefault();
    const value = evt.target.value;
    this.setState({
      inputEmailAddress: value
    })
  }

  handleSubmit (evt, setName, setEmailAddress) {
    evt.preventDefault();
    setName(this.state.inputName);
    setEmailAddress(this.state.inputEmailAddress);
    this.props.router.push('/profile');
  }

  render() {
    const inputStyles = {
      "marginRight" : "10px"
    }

    return (
      <AppContext.Consumer>
        { ({name, emailAddress, setName, setEmailAddress}) => {
          return (
            <div>
              <Head>
                <title>Use Login</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <h1>Login Page</h1>
              <form onSubmit={(evt) => this.handleSubmit(evt, setName, setEmailAddress)}>
                <label htmlFor="name">Name</label>
                <input style={inputStyles} 
                  id="name" 
                  type="text" 
                  value={this.state.inputName || name} 
                  onChange={this.handleNameChange}/>
                <label htmlFor="emailAddress">Email Address</label>
                <input style={inputStyles} 
                  id="emailAdress" 
                  type="text" 
                  value={this.state.inputEmailAddress || emailAddress}
                  onChange={this.handleEmailAdressChange}/>
                  <input type="submit" value="Submit"/>
              </form>
            </div>
          )}
        }
      </AppContext.Consumer>
    )
  }
}

export default withRouter(LoginClassComponent);