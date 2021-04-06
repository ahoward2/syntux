import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import React, { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <h3 className={"header"}>Navigate</h3>
          <hr></hr>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>
                🏠 home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className={router.pathname === "/posts" ? "active" : null}>
                🔎 browse
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/tags/guides">
              <a
                className={
                  router.pathname === "/posts/tags/guides" ? "active" : null
                }
              >
                📖 guides
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/tags/article">
              <a
                className={
                  router.pathname === "/posts/tags/article" ? "active" : null
                }
              >
                📝 articles
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
              overflow: hidden;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #010f34;
              display: flex;
              flex-direction: column;
              z-index: 3;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            h3 {
              font-size: 1.5rem;
              padding: 0 1.5rem 0 0;
              color: white;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #0ce8da;
            }
            hr {
              margin-bottom: 1.5rem;
              background: white;
              width: 100%;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
                padding-left: 2rem;
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
