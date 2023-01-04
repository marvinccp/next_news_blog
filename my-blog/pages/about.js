import React from 'react'
import Layout from './blog/layout'
import styles from '../styles/about.module.css'

const about = () => {
  return (
    <Layout title='About'>

    <section className={styles.container}>
<h4>About</h4>

<p>
  Prototipo de App de noticias realizado 
  como práctica de Next js
</p>

    </section>
    
    </Layout>
  )
}

export default about