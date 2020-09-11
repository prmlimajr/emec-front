import React, { Component } from 'react';

import logo from '../../../assets/images/emec-logo-blue.png';

import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const inputField = this.state;
    inputField[e.target.name] = e.target.value;
    console.log(this.state.email, this.state.password);
    this.setState({ inputField });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('object');
  };

  render() {
    return (
      <div className='center'>
        <img src={logo} alt='Emec' className='img-logo' />
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Insira seu email'
              name='email'
              onChange={this.handleChange}
            />
            <input
              type='password'
              placeholder='Insira sua senha'
              name='password'
              onChange={this.handleChange}
            />
            <button type='submit' className='btn-blue'>
              Entrar
            </button>
          </form>
          <p>Ainda não tem sua conta? Faça seu cadastro aqui!</p>
        </div>
      </div>
    );
  }
}

export default Login;
