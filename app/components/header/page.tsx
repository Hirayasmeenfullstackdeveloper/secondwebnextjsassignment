
import style from "../header/header.module.css"
import Link from 'next/link'


const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Header</h1>
      <nav >
      <ul className={style.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/service">Service</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header;
