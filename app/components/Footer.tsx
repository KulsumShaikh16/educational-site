import React from 'react'
import styles from '@/app/styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footermenu}>
        <Link href='/'className={styles.navItem}>Home</Link>
          <Link href='/about'className={styles.navItem}>About</Link>
          <Link href='/services'className={styles.navItem}>Services</Link>
          <Link href='/contact'className={styles.navItem}>Contact us</Link>
        </div>
        <div className={styles.copyright}>
          <p>©2024 KUlSUM SHAIKH. All right reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
