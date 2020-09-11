import React, { Component } from 'react';

import logo from '../../../assets/images/emec-logo-blue.png';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    console.log(e);
    // this.setState({
    //   name: value,
    // });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
