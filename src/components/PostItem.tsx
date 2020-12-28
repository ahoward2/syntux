import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <>
    <div className="post-item-wrapper">
      <Link href={"/posts/" + post.slug}>
        <a>
          <Date date={parseISO(post.date)} />
          <h2>{post.title}</h2>
          
        </a>
      </Link>
      </div>
      <style jsx>
            {`
              a {
                color: #222;
                display: inline-block;
              }
              h2 {
                margin: 0;
                font-weight: 500;
              }
            `}
          </style>
      </>
  );
}
