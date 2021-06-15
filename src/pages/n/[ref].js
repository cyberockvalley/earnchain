import Home from "..";
import { useRouter } from 'next/router'
import { refIdToUserId, saveRefUserId, userIdToRefId } from "../../utils/f";


export default function Ref() {
    const router = useRouter()
    var refId = router.query.ref

    if(!isNaN(refId)) refId = userIdToRefId(refId)
    console.log("QUERY_REF-ID:", refId)
    if(refId) {
        var refUserId = refIdToUserId(refId)
        console.log("QUERY_REF-USER-ID:", refUserId)
        if(refUserId) saveRefUserId(refUserId)
    }

    return (
        <Home />
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