import Link from "next/link";

type Props = {
  text: string;
  href: string;
};
export default function TagButton({ text, href }: Props) {
  return (
    <>
      <Link href={href}>
        <a>{text}</a>
      </Link>
      <style jsx>{`
        a {
          border-radius: 3px;
          background-color: rgba(41, 163, 238, 0.2);
          color: #0ce8da;
          transition: background-color 0.3s ease;
          padding: 0.5em 1em;
          font-size: 2rem;
        }
        a:active,
        a:hover {
          background-color: rgba(41, 163, 238, 0.4);
        }
      `}</style>
    </>
  );
}
