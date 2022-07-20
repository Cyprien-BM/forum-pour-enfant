import React from 'react';
import ButtonAction from '../../component/ButtonAction/ButtonAction';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  return (
    <div className='Register'>
      <h1>Créer un compte</h1>
      <div className='container-register'>
        <form action=''>
          <div className='input-container-register'>
            <label htmlFor=''>Email</label>
            <input type='email' />
          </div>
          <div className='input-container-register'>
            <label htmlFor=''>Mot de passe</label>
            <input type='password' />
          </div>
          <div className='input-container-register'>
            <label htmlFor=''>Confirmez votre mot de passe</label>
            <input type='password' />
          </div>
          <div className='input-container-register'>
            <label htmlFor=''>Nom</label>
            <input type='texte' />
          </div>
          <div className='input-container-register'>
            <label htmlFor=''>Prénom</label>
            <input type='texte' />
          </div>
        </form>
      </div>
    </div>
  );
}
