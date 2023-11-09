import { CodeBracketIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const anchorStyle =
    'px-2 py-2 hover:text-white rounded-lg mx-2 text-sm font-bold text-gray-800 shadow-md hover:shadow-lg m-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 from-blue-400 to-blue-600 bg-gradient-to-br hover:from-pink-500 hover:to-yellow-500';
  // Navbar should use a map operation to produce each anchor tag.
  const navBarContent = [
    { href: '/', text: 'HOME' },
    { href: '/contact', text: 'CONTACT' },
    { href: '/resume', text: 'RESUME' },
    { href: '/blog', text: 'BLOG' },
    { href: '/about', text: 'ABOUT' },
  ];
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-start">
          <CodeBracketIcon className="h-12 w-12" />
        </div>
        <div className="flex justify-end">
          {navBarContent.map((item, index) => (
            <a key={index} href={item.href} className={anchorStyle}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
