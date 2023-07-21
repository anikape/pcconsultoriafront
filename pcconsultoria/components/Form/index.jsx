import React, { useState } from 'react';
import style from './FormLogin.module.css';
import Image from 'next/image';
import { FaUser, FaInfoCircle } from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificação dos campos obrigatórios
    if (username === '' || password === '') {
      setLoginError('Usuário e/ou senha inválido');
      return;
    }

    // Lógica para verificar se o usuário e senha estão corretos
    // Idealmente, isso seria conectado a uma API ou banco de dados

    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido');
    } else {
      setLoginError('Usuário e/ou senha inválido');
    }
  };

  return (
    <div className={style.containerForm}>
      <Image src="/logo-pc-consultoria-2.svg" alt="Logo Pc Consultoria" width={331} height={65} />

      <form onSubmit={handleSubmit}>
        <div className={style.div}>
          <div className={style.inputContainer}>
            {loginError && <p className={style.error}><FaInfoCircle /> {loginError}</p>}
            <input
              className={style.inputText}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
            />
          </div>
        </div>
        <div className={style.div}>
          <input
          className={style.inputPass}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="......"
          />
          {/* {loginError && <p>{loginError}</p>} */}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <a className={style.forguet} href="">
        Esqueceu a senha?
      </a>
    </div>
  );
};

export default LoginForm;