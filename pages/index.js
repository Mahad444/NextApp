import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Hello NextJs</h1>
      <p className={styles.text}>welcome to our sitution gderwe sedcgfioyitkhftuo  yhghg going bt o yut gsaddd sdewsawsaws ht gdse </p>
      <p className={styles.text}>welcome to our sitution gderwe sedcgfioyitkhftuo  yhghg going bt o yut gsaddd sdewsawsaws ht gdse </p>
      <Link legacyBehavior href={'/mahad/test'}>
        <a className={styles.btn}> See Mahad Listings</a>
      </Link>
    </>
  )
}
