import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='absolute bg-white h-5/6 w-full top-10 z-40'>
        <Banner /> 
      </main>
    </div>
  )
}
