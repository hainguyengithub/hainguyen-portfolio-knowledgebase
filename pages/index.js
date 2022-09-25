import Header from "@components/Header";
import MetaHead from "@components/MetaHead";
import { keywords } from "config/keywords";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MetaHead
        keywords={keywords}
        description="Hai Nguyen"
        title="Homepage of Hai Nguyen"
      />
      <div className="container">
        <section id="main">
          <article>
            <Header title="Hai Nguyen's Porfolio" />
            <div className="meta">
              Updated{" "}
              <time className="meta-date" dateTime="2022-09-24">
                Sep 24, 2022
              </time>
              <ul className="meta-tags">
                <li className="tag">
                  <Link href="#">Hai Nguyen</Link>
                  <Link href="#">Developer</Link>
                  <Link href="#">Portfolio</Link>
                </li>
              </ul>
            </div>
            <p className="description">
              Get started by editing <code>pages/index.js</code>
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
