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
          border-color: white;
          border-style: solid;
          border-width: 1px;
          color: white;
          transition: background-color 0.3s ease;
          padding: 0.5em 1em;
          font-size: 1.5rem;
        }
        a:active,
        a:hover {
          background-color: rgba(41, 163, 238, 0.4);
        }
      `}</style>
    </>
  );
}
