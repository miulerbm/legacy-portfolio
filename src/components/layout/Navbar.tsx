import MenuItem from "../navigation/MenuItem";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-14 w-full bg-black text-white">
      <MenuItem title={"About"} />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Services"} />
    </div>
  );
};

export default Navbar;
