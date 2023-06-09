import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const currentPath = useRouter().asPath;
  const currPath = `https://gfsitsolutions.com${currentPath}`;
  return (
    <>
      <Head>
        <link rel="canonical" href={currPath} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <meta name="ROBOTS" content="INDEX, FOLLOW" /> */}
        <meta name="robots" content="noindex,nofollow" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              var Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/64076afe31ebfa0fe7f134ed/1gqufjtc9";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "Organization",
            "name": "GFS IT Solutions",
            "url": "https://gfsitsolutions.com/",
            "sameAs": [
              "https://www.facebook.com/gfsitsolutions",
              "https://twitter.com/GFSITSolution",
              "https://www.instagram.com/gfsitsolutions/",
              "https://www.youtube.com/@GFSITSOLUTIONS",
              "https://www.linkedin.com/company/gfs-it-solutions/"
            ]
          }
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-VH84SKZJF2");
      `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
