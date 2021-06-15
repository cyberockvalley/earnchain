import { route } from 'next/dist/next-server/server/router'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MatrixPage from '../../components/MatrixPage'

export default function ProjectsHome({props}) {
  const router = useRouter()
  useEffect(() => router.push("/projects/matrix"))
  
  return (
    <></>
  )
}