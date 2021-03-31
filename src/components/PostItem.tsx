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
      <div className="post-item-wrapper">
        <Link href={"/posts/" + post.slug}>
          <a>
            <FeatureImage url={post.feature}></FeatureImage>
            <div className="post-item-lower">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Date date={parseISO(post.date)} color={"white"} emoji={true} />
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .post-item-wrapper {
            transition: 0.3s;
            border: solid;
            border-color: rgba(255, 255, 255, 0.5);
            margin-top: 0.5rem;
            height: 100%;
          }
          a {
            display: inline-block;
          }
          .post-item-wrapper:active,
          .post-item-wrapper:hover {
            border-color: white;
            transform: scale(1.1);
            box-shadow: 5px 5px 100px 5px #0ff;
          }
          h2 {
            margin: 0;
            font-size: 1rem;
            text-align: left;
            color: white;
          }
          p {
            font-size: 0.75rem;
            color: white;
          }
          .post-item-lower {
            padding: 1rem 0.5rem 0.5rem 0.5rem;
          }

          @media (min-width: 769px) {
            .post-item-wrapper {
              margin-top: 0;
            }
          }
        `}
      </style>
    </>
  );
};
