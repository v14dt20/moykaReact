import Header from "./Header/Header";
import MenuBar from "./MenuBar/MenuBar";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <nav className='sidebar close'>
      <Header />
      <MenuBar />
    </nav>
  );
};

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});


export default Sidebar;
