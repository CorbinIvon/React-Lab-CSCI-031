'use client';
export default function Spotify({ src, className = 'w-2/3 border-none rounded-2xl' }) {
  const source = 'https://open.spotify.com/embed/track/' + src + '?utm_source=generator&theme=0';
  return <iframe src={source} height="80" className={className} loading="lazy"></iframe>;
}
