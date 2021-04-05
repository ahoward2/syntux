type CalloutProps = {
  content: string;
  color: string;
};
export default function Callout({ content, color }: CalloutProps) {
  return (
    <>
      <div className="callout-container">
        <p>{content}</p>
      </div>
      <style jsx>{`
        .callout-container {
          background: rgba(125, 125, 125, 0.2);
        }
        p {
          color: ${color};
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
