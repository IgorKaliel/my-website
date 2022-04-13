import { NextSeo } from "next-seo";
import { domain } from "../../data/config";

export default function Blog() {
    return (
        <>
            <NextSeo
                title='Blog Page - NextVita'
                description='Blog for this website are available here. You can find blog using input box provided in the top. '
                canonical={`${domain}/blog`}
                openGraph={{
                url: `${domain}/blog`,
                title: 'Blog Page - NextVita',
                description:
                    'Blog for this website are available here. You can find blog using input box provided in the top. ',
                }}
            />
            
            <h1>Blog</h1>

        </>
    )
}