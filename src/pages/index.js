import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'

export default function Home() {
  
  return (
    <HomePage />
  )
}

export async function getStaticProps({locales}) {
  return {
      props: {
          
      }
  }
}