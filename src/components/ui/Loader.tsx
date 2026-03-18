"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
      <h1 className="text-2xl tracking-widest">
        GAAM<span className="text-red-500">.</span>
      </h1>
    </div>
  );
}
