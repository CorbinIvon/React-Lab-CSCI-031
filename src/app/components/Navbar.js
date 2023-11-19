import { CodeBracketIcon } from '@heroicons/react/24/solid';
import navBarContent from '../data/navContentData';

export default function Navbar() {
  const anchorStyle =
    'bg-slate-700 border rounded duration-800 hover:border-transparent hover:bg-slate-900 transition ease-in-out m-2 p-1';
  // Navbar should use a map operation to produce each anchor tag.
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
