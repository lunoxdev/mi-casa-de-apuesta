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
        className="inline-flex w-1/2 h-12 mt-2 text-lg animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors hover:border-slate-600 hover:border-sm"
        onClick={handleCopyClick}
      >
        <p className="hover:scale-110 uppercase">
          {copied ? "Copiado" : info.promocode}
        </p>
      </button>
    </>
  );
};

export default PromoCode;
