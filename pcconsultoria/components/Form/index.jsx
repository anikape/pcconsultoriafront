import React, { useState } from 'react';
import style from './FormLogin.module.css'
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificação dos campos obrigatórios
    if (username === '') {
      setUsernameError('Usuário inválido');
    } else {
      setUsernameError('');
    }

    if (password === '') {
      setPasswordError('Senha inválida');
    } else {
      setPasswordError('');
    }

    // Lógica para verificar se o usuário e senha estão corretos
    // Idealmente, isso seria conectado a uma API ou banco de dados

    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className={style.containerForm}>

      <Image
        src="/logo-pc-consultoria-2.svg"
        alt="Logo Pc Consultoria"
        width={331}
        height={65}
      />
     

      <form onSubmit={handleSubmit}>
        <div className={style.div}>
          <div className={style.inputContainer}>
            
          
            <input
            className={style.inputText}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
            />
            </div>
          
          {usernameError && <p>{usernameError}</p>}
        </div>
        <div className={style.div}>
          {/* <label>Senha:</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='......'
          />
          {passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <a className={style.forguet} href="">Esqueci a senha</a>
    </div>
  );
};

export default LoginForm;