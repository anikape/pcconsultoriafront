import React from 'react'
import Link from 'next/link';
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

            <Link href="/client" className={style.options}>
            <FaTasks /> Lista de clientes
            </Link>
             <Link href="" className={style.options}>
              <FaNewspaper />Documentos
             </Link>
             
             <Link href=""  className={style.options}>
             <FaUsers />Área Adm
             </Link>
            

          </div>  

          <Link href='/' className={style.logout}>
        <BiLogOut /> Sair
          </Link>
        

        </section>

    
    </section>
  )
}

export default home