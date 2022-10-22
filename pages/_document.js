import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Ridwan is a web developer passionate about making impact and creating solutions through technology. He is focused on developing products that provide outstanding experiences and are accessible to users."
        />
        <meta
          content="reedwane, Reedwane, Ridwan Abdulkareem, Abdulkareem Ridwan, React Developer, Nextjs, Frontend dev, Javascript"
          name="keywords"
        />

        {/* <meta
          content="https://kentcdodds.com/img/social?type=1&amp;words=Helping+people+make+the+world+a+better+place+through+quality+software.&amp;img=kentcdodds.com%2Fillustrations%2Fkody-flying_blue&amp;url=kentcdodds.com"
          name="image"
        /> */}
        <meta content="https://reedwane.com" property="og:url" />
        <meta content="Ridwan Gboyega Abdulkareem" property="og:title" />
        <meta
          content="Ridwan is a web developer passionate about making impact and creating solutions through technology. He is focused on developing products that provide outstanding experiences and are accessible to users."
          property="og:description"
        />
        {/* <meta
          content="https://kentcdodds.com/img/social?type=1&amp;words=Helping+people+make+the+world+a+better+place+through+quality+software.&amp;img=kentcdodds.com%2Fillustrations%2Fkody-flying_blue&amp;url=kentcdodds.com"
          property="og:image"
        /> */}

        <link rel="canonical" href="https://reedwane.com" />

        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@500&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
