export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative px-6 py-3 rounded-lg font-medium overflow-hidden group">
      <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 blur transition" />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
