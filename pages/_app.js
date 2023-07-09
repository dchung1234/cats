import '../styles/global.css';
import { useState } from 'react';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    // On Mobile
    // if home is true then set to false
    // else set to true
    const [hideProfile, setHideProfile] = useState(false);
    const handleViewMenu = () => {
        console.log("on hamburger click... " + !hideProfile);
        setHideProfile(!hideProfile);
    }

    return <NextUIProvider>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
                rel="stylesheet" />
        </Head>
        <Component {...pageProps}
              hideProfile={hideProfile}
              handleViewMenu={handleViewMenu}
        />
    </NextUIProvider>;
}

export default MyApp;