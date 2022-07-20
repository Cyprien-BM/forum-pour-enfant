import React, { useState, useEffect, useRef } from 'react';
import ButtonAction from '../../component/ButtonAction/ButtonAction';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const ref = useRef();

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordVerification: '',
    firstName: '',
    lastName: '',
  });

  const handleClick = (event) => {
    event.preventDefault();
    //Inscription
  };

  const navigateLogin = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  const handleInput = (event) => {
    if (event.target.id === 'register-email') {
      const newUser = { ...user, email: event.target.value };
      setUser(newUser);
      return;
    }
    if (event.target.id === 'register-first-password') {
      const newUser = { ...user, password: event.target.value };
      setUser(newUser);
      return;
    }
    if (event.target.id === 'register-second-password') {
      const newUser = { ...user, passwordVerification: event.target.value };
      setUser(newUser);
      return;
    }
    if (event.target.id === 'register-firstname') {
      const newUser = { ...user, firstName: event.target.value };
      setUser(newUser);
      return;
    }
    if (event.target.id === 'register-lastname') {
      const newUser = { ...user, lastName: event.target.value };
      setUser(newUser);
      return;
    }
  };

  return (
    <div className='register'>
      <h1 className='h1-register'>Créer un compte</h1>
      <form action='' className='form-register'>
        <div className='input-container-register'>
          <label htmlFor='register-email'>Email *</label>
          <input
            type='email'
            className='input-register'
            id='register-email'
            onInput={(event) => handleInput(event)}
            value={user.email}
          />
        </div>
        <div className='input-container-register'>
          <label htmlFor='register-first-password'>Mot de passe *</label>
          <input
            type='password'
            className='input-register'
            id='register-first-password'
            onInput={(event) => handleInput(event)}
            value={user.password}
          />
        </div>
        <div className={`input-container-register ${
              user.password !== ''
                ? user.passwordVerification === user.password
                  ? ''
                  : 'invalid'
                : 'invalid'
            }`}>
          <label htmlFor='register-second-password'>
            Confirmez votre mot de passe *
          </label>
          <input
            type='password'
            className={'input-register'}
            id='register-second-password'
            ref={ref}
            onInput={(event) => handleInput(event)}
            value={user.passwordVerification}
          />
        </div>
        <div className='input-container-register'>
          <label htmlFor='register-firstname'>Prénom *</label>
          <input
            type='texte'
            className='input-register'
            id='register-firstname'
            onInput={(event) => handleInput(event)}
            value={user.firstName}
          />
        </div>
        <div className='input-container-register'>
          <label htmlFor='register-lastname'>Nom *</label>
          <input
            type='texte'
            className='input-register'
            id='register-lastname'
            onInput={(event) => handleInput(event)}
            value={user.lastName}
          />
        </div>
        <ButtonAction
          onClick={(event) => handleClick(event)}
          txt={'Inscription'}
        />
      </form>
      <p>Déjà inscrit ?</p>
      <ButtonAction
        onClick={(event) => navigateLogin(event)}
        txt={'Connexion'}
      />
    </div>
  );
}
