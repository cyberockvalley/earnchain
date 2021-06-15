import Head from 'next/head'
import Image from 'next/image'
import DashPage from '../components/DashPage'
import SlotPage from '../components/SlotPage'

export default function Dashboard() {

  return (
    <DashPage />
  )
}

export async function getStaticProps({locales}) {
  return {
      props: {
          
      }
  }
}