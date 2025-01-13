export function Activity({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
    </li>
  );
} 