import Home from "..";

export default function Index() {

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