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
              <hr></hr>
              <p>{post.excerpt}</p>
              <Date date={parseISO(post.date)} color={"#010f34"} emoji={true} />
            </div>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .post-item-wrapper {
            transition: 0.3s;
            background: white;
            border: solid;
            margin-top: 0.5rem;
          }
          a {
            display: inline-block;
          }
          .post-item-wrapper:active,
          .post-item-wrapper:hover {
            margin-top: -0.5rem;
          }
          h2 {
            margin: 0;
            font-size: 1rem;
            text-align: left;
            color: #010f34;
          }
          p {
            font-size: 0.75rem;
            color: #010f34;
          }
          .post-item-lower {
            padding: 0.5rem;
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
