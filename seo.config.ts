import { domain, twitter } from './src/data/config';
const title = 'I am Igor Kaliel, frontend developer';
const description =
  'I am a Frontend Developer experienced in web development using Node, ReactJS and NextJS, focused on details and user experience.';
const siteName = 'Igor Kaliel';
const canonical = domain;
const SEO = {
  title,
  description,
  titleTemplate: '%s | ' + siteName,
  canonical: canonical,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: canonical,
    title,
    description,
    images: [
      {
        url: domain + '/static/images/banner.png',
        alt: title,
        width: 1350,
        height: 650,
      },
    ],
  },
  twitter: {
    handle: twitter,
    site: twitter,
    cardType: 'summary_large_image',
  },
};

export default SEO;