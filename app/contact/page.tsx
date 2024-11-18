import React from 'react'
import styles from '@/app/styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h1 className={styles.contactheading1}>Talk to us</h1>
          <h2 className={styles.contactheading2}>Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you</h2>
          <button className={styles.contactbutton}>Get in touch</button>
      
    </div>
  )
}

export default Contact
