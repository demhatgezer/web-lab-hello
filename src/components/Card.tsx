type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      {children}
    </article>
  );
}