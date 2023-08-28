import BottomContent from "./BottomContent/BottomContent";
import Menu from "./Menu/Menu";

const MenuBar = (props) => {
  return (
    <div className='menuBar'>
      <Menu />
      <BottomContent />
    </div>
  );
};

export default MenuBar;