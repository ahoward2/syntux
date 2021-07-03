import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import FeatureImage from "../components/FeatureImage";
import { parseISO } from "date-fns";

export interface PostItemProps {
  post: PostContent;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <>
      {post ? (
        <div className="post-item-wrapper">
          <Link href={"/posts/" + post.slug}>
            <a>
              {post.feature ? (
                <FeatureImage url={post.feature}></FeatureImage>
              ) : (
                <p>loading...</p>
              )}
              <div className="post-item-lower">
                <h2>{post.title}</h2>
                <div className="date-wrapper">
                  <Date
                    date={parseISO(post.date)}
                    color={"grey"}
                    emoji={true}
                  />
                </div>
                <p>{post.excerpt}</p>
              </div>
            </a>
          </Link>
        </div>
      ) : (
        <p>loading...</p>
      )}
      <style jsx>
        {`
          .post-item-wrapper {
            transition: 0.3s;
            border: solid;
            border-width: 1px;
            border-color: rgba(255, 255, 255, 0.5);
            margin-top: 0.5rem;
            height: 100%;
            background: #fff;
          }
          a {
            display: inline-block;
          }
          .post-item-lower {
            display: flex;
            flex-direction: column;
            padding: 0.5rem 0.5rem 0rem 0.5rem;
          }
          h2 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5rem;

            text-align: left;
            color: black;
            flex: 1;
          }
          p {
            font-size: 0.75rem;
            line-height: 1rem;
            color: black;
            flex: 1;
          }
          .date-wrapper {
            flex: 1;
            margin-top: 0.5rem;
          }
          path {
            color: white;
          }
          .hourglass-wrapper {
            color: white;
          }
          @media (min-width: 769px) {
            .post-item-wrapper {
              margin-top: 0;
            }
            .post-item-wrapper:hover {
              border-color: white;
            }
          }
        `}
      </style>
    </>
  );
};
