export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
      {children}
    </h2>
  );
} 