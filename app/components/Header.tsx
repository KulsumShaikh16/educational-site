
import React from 'react'
import styles from '@/app/styles/header.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      
      
    <div className={styles.header}>
      <div className={styles.container}>
        
          
          <span className={styles.title}>KS</span>
    
        <nav className={styles.nav}>
          <Link href='/'className={styles.navItem}>Home</Link>
          <Link href='/about'className={styles.navItem}>About</Link>
          <Link href='/services'className={styles.navItem}>Services</Link>
          <Link href='/contact'className={styles.navItem}>Contact us</Link>
        </nav>
        
      </div>
    </div>
  

    </div>
  )
}

export default Header
