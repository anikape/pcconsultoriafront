import React from 'react'
import style from "../styles/home.module.css"
import { FaUserAlt, FaTasks, FaNewspaper, FaUsers  } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const home = () => {
  return (
    <section className={style.containerHome}>

        <section className={style.content}>
          <div className={style.info}>
          <FaUserAlt 
          
          className={style.icon}/>

          <p>Olá, Cristiane</p>
          </div>

          <div className={style.links}>

              <a href=""  > <FaTasks /> Lista de clientes</a>
              <a href=""> <FaNewspaper />Documentos</a>
              <a href=""> <FaUsers />Área Adm</a>

          </div>  

          <a href='/'  className={style.logout} ><BiLogOut /> Sair</a>

        </section>

    
    </section>
  )
}

export default home