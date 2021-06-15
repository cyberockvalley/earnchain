import AirdropPage from '../components/AirdropPage'

export default function Airdrop() {
  
  return (
    <AirdropPage />
  )
}

export async function getStaticProps({locales}) {
  return {
      props: {
          
      }
  }
}