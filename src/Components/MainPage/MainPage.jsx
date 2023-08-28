import Content1 from './Content1/Content1';
import styleClasses from './MainPage.module.css'

const MainPage = (props) => {
  return (
    <div className={styleClasses.content}>
      <Content1 />
    </div>
  );
}

export default MainPage;