import { useState } from "react";

const PromoCode = ({ ...info }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(info.promocode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
     <button
      className="inline-flex w-40 h-10 mb-3 text-sm animate-background-shine items-center justify-center rounded-md border-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors hover:border-slate-600 hover:border"
      onClick={handleCopyClick}
    >
      {copied ? "COPIADO" : info.promocode}
    </button>
    </>
  );
};

export default PromoCode;
