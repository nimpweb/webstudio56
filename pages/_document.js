import NextDocument, { Html, Head, Main, NextScript, Script } from 'next/document';
import Image from 'next/image'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="yandex-verification" content="021b41254781ef95" />
        </Head>
        <body>
          <noscript>
            <div>
              <Image 
                src="https://mc.yandex.ru/watch/73980112"
                style={{position: "absolute", left: '-9999px'}}
                alt=""
                width={40}
                height={40}
              />
            </div>
          </noscript>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(73980112, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              </script>
           `,
            }}
          />
        </body>
      </Html>
    );
  }
}
