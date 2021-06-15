import Head from 'next/head'
import Image from 'next/image'
import RegPage from '../components/RegPage'

export default function Register() {
  return (
    <RegPage />
  )
}

export async function getStaticProps({locales}) {
  return {
      props: {
          
      }
  }
}