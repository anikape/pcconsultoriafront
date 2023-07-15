import React from "react"
import Footer from "../components/Footer"
import FormLogin from "../components/Form"
import style from "../styles/index.module.css"

export default function Home() {
  return (
    
  <section className={style.container}>
  
    <section className={style.main}>
    <FormLogin />
    
    </section>

    <section className={style.footer}>
    <Footer />
  </section>
  </section>
  
  )
}
