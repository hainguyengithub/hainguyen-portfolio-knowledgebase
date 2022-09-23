import React from "react";
import Head from "next/head";

function MetaHead(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{props.title}</title>
      </Head>
    </div>
  );
}

export default MetaHead;
