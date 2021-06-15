import Head from 'next/head'
import Image from 'next/image'
import LoginPage from '../components/LoginPage'

export default function Login() {
  return (
    <LoginPage />
  )
}

export async function getStaticProps({locales}) {
  return {
      props: {
          
      }
  }
}