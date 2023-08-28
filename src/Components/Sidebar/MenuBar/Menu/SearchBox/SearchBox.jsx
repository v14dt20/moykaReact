const SearchBox = (props) => {
  return (
    <li className='searchBox'>
      <i
        className='bx bxSearch icon'
      ></i>
      <input type="text" placeholder="Поиск по сайту"></input>
    </li>
  );
};

export default SearchBox;