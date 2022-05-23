import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Nav_bar from './components/Navbar/Nav_bar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Collections from './components/Collections/Collections';
import NewestNFT from './components/NewestNFT/NewestNFT';
import TopSellers from './components/TopSellers/TopSellers';
import PromotedCreation from './components/PromotedCreation/PromotedCreation';
import StartSell from './components/StartSell/StartSell';
import Academy from './components/Academy/Academy';
import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <div className="App">
      
      <Nav_bar/>
      <Home/>
      <div className='main'>
      <Category/>
      <Collections/>
      <NewestNFT/>
      <TopSellers/>
      <PromotedCreation/>
  

      </div>

      <StartSell/>
      <Academy/>
      <Footer/>
      

    </div>
  );
}

export default App;
