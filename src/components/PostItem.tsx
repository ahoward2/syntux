import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
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
            <Date date={parseISO(post.date)} />
            <h5>{post.title}</h5>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .post-item-wrapper {
            padding: 0 0.25rem 0 0.25rem;
            transition: 0.3s;
            border-radius: 5px;
            background: rgba(21, 132, 125, 0.2);
          }
          a {
            color: white;
            display: inline-block;
          }
          h2 {
            font-weight: 500;
            color: white;
          }
          h5 {
            font-weight: 200;
          }
        `}
      </style>
    </>
  );
};
