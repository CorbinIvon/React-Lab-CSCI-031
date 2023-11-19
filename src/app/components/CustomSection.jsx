export default function CustomSection({ children = '<h1>Default-Section-Data</h1>', style = 'text-2xl' }) {
  return <section className={style}>{children}</section>;
}
