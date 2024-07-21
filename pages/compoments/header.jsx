const Header = () => {
  return (
    <header className="w-4/5 flex justify-between m-auto mt-4 items-baseline mb-36">
      <div className="flex gap-12">
        <h1 className="font-bold text-2xl">Brainwave.io</h1>
        <ul className="flex gap-11 font-bold text-base">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="font-bold text-base text-white bg-blue-700 rounded-xl w-52 h-12">
        Get started a project
      </button>
    </header>
  );
};
export default Header;
