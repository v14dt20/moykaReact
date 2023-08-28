import MenuLinks from "./MenuLinks/MenuLinks";
import SearchBox from "./SearchBox/SearchBox";

const Menu = (props) => {
  return (
    <div className='menu'>
      <SearchBox />
      <MenuLinks />
    </div>
  );
};

export default Menu;
