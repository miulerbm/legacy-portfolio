import ContactBtn from "./ContactBtn";
import LinkItem from "./LinkItem";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <>
      <MenuItem title={"About"} />
      <LinkItem title="Blog" href="https://miuler-blog.vercel.app/" />
      <MenuItem title={"Projects"} />
      <MenuItem title={"Services"} />
      <ContactBtn title={"Contact Me"} />
    </>
  );
};

export default Menu;
