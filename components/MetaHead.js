import React from "react";
import Head from "next/head";
import Script from "next/script";

function MetaHead(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
        {/* Use https://www.favicon-generator.org to generate favicon. */}
        {/* There is no need to specify the <link /> element for favicon. Just create "favicon.ico" file in the "public" directory. */}
        <Script
          src="https://kit.fontawesome.com/240bcecb67.js"
          crossOrigin="anonymous"
        />
      </Head>
    </div>
  );
}

export default MetaHead;
