import { PostContent } from "../lib/posts";
import { PostItem } from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
      <ul className={"categories"}>
        <h3>Tags</h3>
        <hr></hr>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          height: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        h3 {
          font-size: 1.5rem;
        }
        hr {
          margin-bottom: 1.5rem;
        }
        .posts {
          display: flex;
          flex-direction: column;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: auto;
          gap: 1rem;
        }
        @media (min-width: 769px) {
          .post-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 2.5rem;
          }
        }
        .categories {
          display: none;
          margin-left: 2rem;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
