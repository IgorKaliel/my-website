import { NextSeo } from "next-seo";
import { domain } from "../data/config";

export default function About() {
    return (
        <>
            <NextSeo
                title='About me Igor Kaliel'
                description='About me Igor Kaliel, I am frontend developer experienced in web development using Node, ReactJS and NextJS, focused on details and user experience.'
                canonical={`${domain}/about`}
                openGraph={{
                url: `${domain}/about`,
                    title:
                    'About me Igor Kaliel',
                    description:
                    'About me Igor Kaliel, I am frontend developer experienced in web development using Node, ReactJS and NextJS, focused on details and user experience.',
                }}
            />
            <h1>About me</h1>
        </>
    )
}