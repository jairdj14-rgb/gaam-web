"use client";

import { useEffect, useState } from "react";

export default function Parallax({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        transform: `rotateX(${-pos.y}deg) rotateY(${pos.x}deg)`,
      }}
      className="transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}
