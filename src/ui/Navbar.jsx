function Navbar({ onClick }) {
  return (
    <nav
      className={`shadow-md space-y-10 z-30 h-full absolute top-0 right-0 p-1 w-full md:w-1/4 bg-slate-50`}
    >
      <div className="mt-20 space-y-10 fixed">
        <ul className="divide-y-2 divide-slate-500/10">
          <li className="text-xl p-3 hover:text-gray-800 hover:font-bold text-gray-500">
            <a onClick={onClick} href="#sec-1">
              אנחנו
            </a>
          </li>
          <li className="text-xl p-3 hover:text-gray-800 text-gray-500 hover:font-bold">
            <a onClick={onClick} href="#sec-2">פרטים וניווט</a>
          </li>
          <li className="text-xl p-3 hover:text-gray-800 text-gray-500 hover:font-bold">
            <a onClick={onClick} href="#sec-3">
              תפריט אוכל
            </a>
          </li>
          <li className="text-xl p-3 hover:text-gray-800 text-gray-500 hover:font-bold">
            <a onClick={onClick} href="#sec-4">
              קוקטיילים
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
