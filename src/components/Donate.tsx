export default function Donate() {
  return (
    <>
      <div className="container">
        <a
          className="donate-with-crypto"
          href="https://commerce.coinbase.com/checkout/9c851d4f-87fb-49d5-9128-65ee10725aaf"
        >
          Tip The Author ☕️ | Coinbase Crypto
        </a>
      </div>
      <style jsx>
        {`
          .container {
            border-style: solid;
            border-width: 1px;
            padding: 0.5rem 0;
          }
          a {
            color: white;
          }
          div {
            margin-top: 3rem;
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
