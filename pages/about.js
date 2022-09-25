import Header from "@components/Header";
import MetaHead from "@components/MetaHead";
import { keywords } from "config/keywords";
import React from "react";

export default function About(props) {
  return (
    <>
      <MetaHead
        keywords={keywords}
        description="Hai Nguyen"
        title="About Hai Nguyen"
      />
      <div className="container">
        <section id="main">
          <Header title="Hai Nguyen" />
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </section>
      </div>
    </>
  );
}
