import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import MainPage from './Components/MainPage/MainPage';

const App = () => {
  return (
    <div className='app-wrapper'>
      {/* <Header />
      <Sidebar /> */}
      <MainPage />
    </div>
  );
}

export default App;
