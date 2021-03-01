export default function Donate() {
  return (
    <>
      <div>
        <a
          className="donate-with-crypto"
          href="https://commerce.coinbase.com/checkout/9c851d4f-87fb-49d5-9128-65ee10725aaf"
        >
          Tip The Author ☕️ | Coinbase Crypto
        </a>
        <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
      </div>
      <style jsx>
        {`
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
