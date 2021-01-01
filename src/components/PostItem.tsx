import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
  index: number;
};
export default function PostItem({ post, index }: Props) {
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
              .post-item-wrapper {
                padding: 0.5rem 0 0.5rem 0;
                transition: 0.3s;
                border-radius: 5px;
              }
              a {
                color: white;
                display: inline-block;
              }
              h2 {
                margin: 0 ${index <= 1 ? `1.75rem` : 0} 0 0;
                font-weight: 500;
                color: white;
              }
            `}
          </style>
      </>
  );
}
