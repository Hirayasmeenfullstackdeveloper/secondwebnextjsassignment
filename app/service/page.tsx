import React from 'react'
import style from "../service/service.module.css"
import Link from 'next/link'
const ServicePage = () => {
  return (
    <div className={style.container}>
 <nav >
      <ul className={style.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/service">Service</Link></li>
      </ul>
    </nav>

      <h1 className={style.title}>This is service page</h1>
    </div>
  )
}

export default ServicePage;
