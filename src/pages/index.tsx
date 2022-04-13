import { NextSeo } from 'next-seo';
import { domain } from '../data/config'

import { PreviewsAbout } from '../components/PreviewsAbout';
import { PreviousWork } from '../components/PreviousWork';
import { PreviewsConnect } from '../components/PreviewsConnect';

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
    
      <PreviewsAbout />
      <PreviousWork />
      <PreviewsConnect />
        
    </>
  )
}