import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from './blog/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Home'>
    
      <main >
        <div>
          <p>
            <code>Home</code>
          </p>
          
        </div>

       
          


      </main>
    </Layout>
  )
}

