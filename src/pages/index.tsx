import { NextSeo } from 'next-seo'
import { domain } from '../data/config'

export default function Home() {
  return (
    <>
      <NextSeo
        title='I am Igor Kaliel, frontend developer'
        description='I am a Frontend Developer experienced in web development using Node, ReactJS and NextJS, focused on details and user experience.'
        canonical={`${domain}`}
        openGraph={{
          url: domain,
          title:
            'I am Igor Kaliel, frontend developer',
          description:
            'I am a Frontend Developer experienced in web development using Node, ReactJS and NextJS, focused on details and user experience.',
        }}
      />
    

        
    </>
  )
}