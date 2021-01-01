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

type Props = {
  title: string;
  date: Date;
  slug: string;
  description: string;
  tags: string[];
  author: string;
};
export default function Index({
  title,
  date,
  slug,
  author,
  tags,
  description,
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
          <article>
            <header>
              <h1>{title}</h1>
              <div className={"metadata"}>
                <div>
                  <Date date={date} />
                </div>
                <div>
                  <Author author={getAuthor(author)} />
                </div>
              </div>
            </header>
            <div className={styles.content}>{content}</div>
            <ul className={"tag-list"}>
              {tags.map((it, i) => (
                <li key={i}>
                  <TagButton tag={getTag(it)} />
                </li>
              ))}
            </ul>
          </article>
          <footer>
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
              padding: 0 1.5rem;
              box-sizing: border-box;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            h1 {
              margin: 0 0 0.5rem;
              font-size: 2.25rem;
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
            }
          `}
        </style>
        <style global jsx>
          {`
            code[class*="language-"],
            pre[class*="language-"] {
              color: #f8f8f2;
              background: none;
              font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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
              margin: .5em 0;
              overflow: auto;
              border-radius: 0.3em;
            }
            
            :not(pre) > code[class*="language-"],
            pre[class*="language-"] {
              background: #2E3440;
            }
            
            /* Inline code */
            :not(pre) > code[class*="language-"] {
              padding: .1em;
              border-radius: .3em;
              white-space: normal;
            }
            
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #636f88;
            }
            
            .token.punctuation {
              color: #81A1C1;
            }
            
            .namespace {
              opacity: .7;
            }
            
            .token.property,
            .token.tag,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #81A1C1;
            }
            
            .token.number {
              color: #B48EAD;
            }
            
            .token.boolean {
              color: #81A1C1;
            }
            
            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #A3BE8C;
            }
            
            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string,
            .token.variable {
              color: #81A1C1;
            }
            
            .token.atrule,
            .token.attr-value,
            .token.function,
            .token.class-name {
              color: #88C0D0;
            }
            
            .token.keyword {
              color: #81A1C1;
            }
            
            .token.regex,
            .token.important {
              color: #EBCB8B;
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
