import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
  color: string;
};
export default function Author({ author, color }: Props) {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}
