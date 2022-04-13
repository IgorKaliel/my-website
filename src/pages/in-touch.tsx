import { NextSeo } from "next-seo";
import { FormEvent } from "react";
import { domain } from "../data/config";
import * as gtag from "../data/analytics";

export default function InTouch() {
    
    const handleOnSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        gtag.event({
          action: "submit_form",
          category: "engagement",
          label: "contact_form",
        });

        alert(ev);
    };

    return (
        <>
            <NextSeo
                title='In touch - Igor Kaliel'
                description='Contact me I will try to reach you soon. Thank you for visit my website'
                canonical={`${domain}/contact`}
                openGraph={{
                url: `${domain}/contact`,
                title: 'In touch - Igor Kaliel',
                description:
                    'Contact me I will try to reach you soon. Thank you for visit my website',
                }}
            />

            <form onSubmit={handleOnSubmit}>

            </form>
        </>
    );
}