import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import FeatureImage from "../components/FeatureImage";
import { parseISO } from "date-fns";

export interface PostItemProps {
  post: PostContent;
  index: number;
}

export const PostItem = ({ post, index }: PostItemProps) => {
  return (
    <>
      <div className="post-item-wrapper">
        <Link href={"/posts/" + post.slug}>
          <a>
            <h3>{post.title}</h3>
            {/* <Date date={parseISO(post.date)} /> */}
            <FeatureImage url={post.feature}></FeatureImage>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .post-item-wrapper {
            padding: 0rem 0.5rem 0.4rem 0.5rem;
            transition: 0.3s;
            border-radius: 5px;
            border-style: solid;
            border-width: 0.1rem;
            border-color: #0ce8da;
            background: rgba(21, 132, 125, 0.2);
          }
          a {
            color: white;
            display: inline-block;
          }
          h3 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};
