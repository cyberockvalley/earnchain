import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../../dashboard'

export default function SlotIndex() {
  return (
    <Dashboard />
  )
}
export async function getStaticProps({locales}) {
    return {
        props: {
            
        }
    }
}