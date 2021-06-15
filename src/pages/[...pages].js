import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'

export default function SingleModelSlot() {
  return (<div>Single model slot</div>)
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
// pages/blog/[slug].js
export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      /*
      { params: { slug: 'post-1' }, locale: 'en-US' },
      { params: { slug: 'post-1' }, locale: 'fr' },*/
    ],
    fallback: false,
  }
}