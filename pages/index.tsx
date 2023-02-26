import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout/layout'
import { useEffect } from 'react'
import HomeComponent from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    if (localStorage.theme === "dark"){
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Layout>
      <HomeComponent />
    </Layout> 
  )
}
