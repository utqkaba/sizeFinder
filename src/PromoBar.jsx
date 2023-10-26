import React, { useState, useEffect } from 'react';

function PromoBar() {
  const [promoText, setPromoText] = useState("500₺ ÜZERİ ÜCRETSİZ KARGO"); // Başlangıç metni
  const promoTexts = ["500₺ ÜZERİ ÜCRETSİZ KARGO", "YENİ SEZON ÜRÜNLER", "1000₺ ve ÜZERİ ALIŞVERİŞLERDE 150₺ ANINDA İNDİRİM"]; // Değişen metinler

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoText((prevText) => {
        const currentIndex = promoTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % promoTexts.length;
        return promoTexts[nextIndex];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-black text-white p-3 fixed top-0 w-screen">
      <div className="container text-center text-xs font-medium mx-auto">
        <a href="https://uppstairs.com/">
          {promoText}
        </a>
      </div>
    </div>
  );
}

export default PromoBar;
