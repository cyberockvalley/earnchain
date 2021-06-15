import Head from 'next/head'
import Image from 'next/image'
import SlotPage from '../../../components/SlotPage'

export default function N3() {
  return (
    <div id="n3ID">
      <SlotPage type={SlotPage.TYPES.n3} />
    </div>
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