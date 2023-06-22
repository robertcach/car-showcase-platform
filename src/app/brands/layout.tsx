export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>LAYOUT</p>
      {children}
    </section>
  );
}
