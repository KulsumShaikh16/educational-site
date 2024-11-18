import React from 'react'
import styles from '@/app/styles/services.module.css'
import Image from 'next/image'



const Services = () => {
  return (
    <div className={styles.services}> 


      <div className={styles.img}>
        <Image
        src='/office-4009348_1280.jpg'
        alt='image'
        height={600}
        width={350}

        />
        <h2 className={styles.heading1}>Web Design</h2>
        <h6 className={styles.para}>Custom web design for small businesses, we help you capture new audiences and increase your sales</h6>
      </div>



      <div className={styles.img}>
      <Image
        src='/data-5606639_1280.jpg'
        alt='image'
        height={600}
        width={350}

        />
        <h2 className={styles.heading1}>Web Development</h2>
        <h6 className={styles.para}>Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.</h6>
      </div>


      <div className={styles.img}>
      <Image
        src='/content-marketing-4111003_1280.jpg'
        alt='image'
        height={600}
        width={350}

        />
        <h2 className={styles.heading1}>Content Creation</h2>
        <h6 className={styles.para}>Want to attract people to your website?  You have to have the best content in the world. That’s what we do.
</h6>
      </div>
    </div>
  )
}

export default Services
