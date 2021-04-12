import Head from "next/head";
import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "../components/Author";
import Copyright from "../components/Copyright";
import Date from "../components/Date";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import JsonLdMeta from "../components/meta/JsonLdMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import TagButton from "../components/TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import FeatureImage from "../components/FeatureImage";
import Donate from "../components/Donate";
import {
  TwitterShareButton,
  RedditShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";

type Props = {
  title: string;
  date: Date;
  slug: string;
  description: string;
  tags: string[];
  author: string;
  feature: string;
};
export default function Index({
  title,
  date,
  slug,
  author,
  tags,
  description,
  feature,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return ({ children: content }) => {
    return (
      <Layout>
        <BasicMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          description={description}
        />
        <TwitterCardMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
        />
        <OpenGraphMeta
          url={`/posts/${slug}`}
          title={title}
          description={description}
          image={feature}
        />
        <JsonLdMeta
          url={`/posts/${slug}`}
          title={title}
          keywords={keywords}
          date={date}
          author={authorName}
          description={description}
        />
        <div className={"container"}>
          <div className={"share-wrapper"}>
            <ul className={"share-list"}>
              <li className={"share-button-label"}>Share 👉</li>
              <li className={"share-button"}>
                <TwitterShareButton
                  url={`https://www.icycoder.com/posts/${slug}`}
                >
                  Twitter
                </TwitterShareButton>
              </li>
              <li className={"share-button"}>
                <RedditShareButton
                  url={`https://www.icycoder.com/posts/${slug}`}
                >
                  Reddit
                </RedditShareButton>
              </li>
              <li className={"share-button"}>
                <FacebookShareButton
                  url={`https://www.icycoder.com/posts/${slug}`}
                >
                  Facebook
                </FacebookShareButton>
              </li>
              <li className={"share-button"}>
                <WhatsappShareButton
                  url={`https://www.icycoder.com/posts/${slug}`}
                >
                  Whatsapp
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
          <article>
            <header>
              <h1>{title}</h1>
              <div className={"metadata"}>
                <FeatureImage url={feature}></FeatureImage>
                <div className={"date-wrapper"}>
                  <Date date={date} color={"lightgrey"} />
                </div>
                <div className={"author-wrapper"}>
                  <Author author={getAuthor(author)} color={"lightgrey"} />
                </div>
              </div>
            </header>
            <div className={styles.content}>{content}</div>
            <ul className={"tag-list"}>
              <h2>Related Topics</h2>
              {tags.map((it, i) => (
                <li key={i}>
                  <TagButton tag={getTag(it)} />
                </li>
              ))}
            </ul>
          </article>
          {/* <nav>
            <PageNav></PageNav>
          </nav> */}
          <footer>
            <Donate></Donate>
            <div className={"social-list"}>
              <SocialList />
            </div>
            <Copyright />
          </footer>
        </div>
        <style jsx>
          {`
            .container {
              display: block;
              max-width: 50rem;
              width: 100%;
              margin: 0 auto;
              padding: 1.5rem 1.5rem 1.5rem 1.5rem;
              box-sizing: border-box;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
              padding: 0.5rem;
            }
            .share-wrapper {
              position: fixed;
              top: 0.32rem;
              left: auto;
              right: 1.5rem;
              width: 70%;
              display: flex;
              margin: 0;
            }
            .share-list {
              list-style-type: none;
              padding-inline-start: 0;
              white-space: nowrap;
              overflow: scroll;
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* IE and Edge */
            }
            .share-list::-webkit-scrollbar {
              display: none;
            }
            .share-button {
              border-style: solid;
              border-width: 1px;
              padding: 0.25rem;
              display: inline-block;
              margin-right: 0.5rem;
            }
            .share-button-label {
              padding: 0.25rem;
              display: inline-block;
              margin-right: 0.5rem;
              color: white;
              background: rgb(85, 18, 255);
            }
            article {
              flex: 1 0 auto;
            }
            h1 {
              margin: 0 0 1rem;
              font-size: 2.25rem;
              text-align: center;
            }
            .date-wrapper {
              margin-top: 0.5rem;
            }
            .tag-list {
              list-style: none;
              text-align: right;
              margin: 1.75rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list {
              margin-top: 3rem;
              text-align: center;
            }

            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
              .share-wrapper {
                width: 25%;
              }
            }
          `}
        </style>
        <style global jsx>
          {`
            code[class*="language-"],
            pre[class*="language-"] {
              color: #f8f8f2;
              background: rgb(0, 1, 37);
              font-family: "Fira Code", Consolas, Monaco, "Andale Mono",
                "Ubuntu Mono", monospace;
              text-align: left;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              word-wrap: normal;
              line-height: 1.5;
              -moz-tab-size: 4;
              -o-tab-size: 4;
              tab-size: 4;
              -webkit-hyphens: none;
              -moz-hyphens: none;
              -ms-hyphens: none;
              hyphens: none;
            }

            /* Code blocks */
            pre[class*="language-"] {
              padding: 1em;
              margin: 0.5em 0;
              overflow: auto;
              border-radius: 0.3em;
            }

            code[class*="language-typescript"] {
              color: orange;
            }

            code[class*="language-css"] {
              color: orange;
            }

            :not(pre) > code[class*="language-"],
            pre[class*="language-"] {
              background: rgb(0, 1, 37);
            }

            /* Inline code */
            :not(pre) > code[class*="language-"] {
              padding: 0.1em;
              border-radius: 0.3em;
              white-space: normal;
            }

            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #636f88;
            }

            .token.punctuation {
              color: white;
            }

            .namespace {
              opacity: 0.2;
            }

            .token.property,
            .token.tag,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: lightgrey;
            }

            .token.number {
              color: orange;
            }

            .token.boolean,
            .token.unit {
              color: orange;
            }

            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: aqua;
            }

            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string,
            .token.variable {
              color: #81a1c1;
            }

            .token.maybe-class-name {
              color: white;
            }

            .token.property-access {
              color: orange;
            }

            .token.atrule,
            .token.attr-value,
            .token.function,
            .token.class-name {
              color: yellow;
            }
            .token.keyword {
              color: rgb(255, 0, 255);
            }

            .token.regex,
            .token.important {
              color: red;
            }

            .token.important,
            .token.bold {
              font-weight: bold;
            }

            .token.italic {
              font-style: italic;
            }

            .token.entity {
              cursor: help;
            }
          `}
        </style>
      </Layout>
    );
  };
}
