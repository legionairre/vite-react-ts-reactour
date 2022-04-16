export function Header({ title }: { title: string }) {
  return (
    <h1 id={'test-selector'} className="text-5xl">
      {title}
    </h1>
  );
}
