import navBarContent from '../data/navContentData';
export default function Footer() {
  const anchorStyle =
    'bg-slate-700 border rounded duration-800 hover:border-transparent hover:bg-slate-900 transition ease-in-out m-2 p-1';
  return (
    <>
      <hr />
      <div className="">
        <div className="flex justify-center pt-5">
          {navBarContent.map((item, index) => (
            <a key={index} href={item.href} className={anchorStyle}>
              {item.text}
            </a>
          ))}
        </div>
        <p className="text-2xl py-5 text-center">&copy; Copyright 2024 | Corbin Meier | All Rights Reserved</p>
        {/* <a href="https://www.npmjs.com/package/auth0" className="underline flex justify-center">
          Admin Login (WIP)
        </a> */}
      </div>
    </>
  );
}
