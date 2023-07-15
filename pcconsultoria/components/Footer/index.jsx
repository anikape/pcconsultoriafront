import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image';


const Footer = () => {
  return (
    <section className={style.containerFooter}>

      <section className={style.content}>
      <Image
        src="public\images\logo-pc-consultoria-2.svg"
        alt="Logo Pc Consultoria"
        width={261}
        height={45}
        className={style.logo}
      />

        <span className={style.line}></span>

        <p>© 2023 PC CONSULTORIA PROJETOS & SERVIÇOS AMBIENTAIS. TODOS OS DIREITOS RESERVADOS.</p>

      </section>
      
      
    </section>
  )
}

export default Footer