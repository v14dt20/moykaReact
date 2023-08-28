const Header = (props) => {
  return (
    <header>
      <div className='imageText'>
        <span className='image'>
          <img src="" alt=""></img>
        </span>

        <div className='text logoText'>
          <span className='name'>Автомойка</span>
          <span className='profession'>"У пожарки"</span>
        </div>
      </div>

      <i
        className='bx bxChevronRight toggle'
      ></i>
    </header>
  );
};

export default Header;