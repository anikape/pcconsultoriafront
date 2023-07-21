import React,{ useState, useContext, Children } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import LoginPage from './pages/LoginPage/index.js'
import Home from './pages/Home/home.js'
import ClientPage from './pages/ClientPage/client.js'
import {AuthProvider, AuthContext} from "./contexts/auth"


const AppRoutes  = () =>{
  /*Regras de segurança na autenticação / Rota privada <Private>*/

    const Private =({children}) =>{
     const {authenticated, loading} = useContext(AuthContext);
      
     //configurar mensagem de carregamento (efeitos)
     if(loading){
      return<div className="loading"><h1>Carregando...</h1></div>
     }

     if(!authenticated){
      return <Navigate to="/login" />; //Se não estiver autenticado, retorna para o login
     }
     return children; //estando autenticado entra na rota privada

    }

  return(
    <Router>
      <AuthProvider >
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/client" element={<ClientPage />} />

        <Route exact path="/" element={   <Private><Home /></Private>
          } />
      </Routes>
      </AuthProvider>
    </Router>

  )
}

export default AppRoutes;