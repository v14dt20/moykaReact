const NavLink = (props) => {
  return (
    <li className='navLink'>
      <a href="">
        <i
          className={`bx ${props.classNameIcon} icon`}
        ></i>
        <span className='text navText'>
          {props.textItem}
        </span>
      </a>
    </li>
  );
};

export default NavLink;
