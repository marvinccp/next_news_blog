import { Inter } from '@next/font/google'
import Layout from './blog/layout'

const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/home.module.css'
export default function Home() {
  return (
    <Layout title="Home">
      <section className={styles.container}>
        <h4>Home</h4>

        <p>Prototipo de App de noticias realizado como práctica de Next js</p>
      </section>
    </Layout>
  );
}

