import React from 'react'
import styles from '@/app/styles/about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.aboutmain}>
      <div className={styles.imgdiv}>
          <Image
          src="/about.jpg"
          width={500}
          height={800}
          alt="About Us"
          className={styles.aboutimg}
          />
 </div>

      <div className={styles.content}>
        <h1>About us</h1>

        <h3>I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure</h3>

        
      </div>
    </div>
  )
}

export default About
