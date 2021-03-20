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
            <FeatureImage url={post.feature}></FeatureImage>
            <div className="post-item-lower">
              <h2>{post.title}</h2>
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
            -webkit-box-shadow: 0px 2px 15px 5px rgba(72, 163, 255, 0.51);
            box-shadow: 0px 2px 15px 5px rgba(72, 163, 255, 0.51);
          }
          a {
            display: inline-block;
          }
          h2 {
            text-align: left;
            color: #010f34;
          }
          p {
            color: #010f34;
          }
          .post-item-lower {
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  );
};
