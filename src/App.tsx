import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { HeaderMiddle } from './components/Header';

export const links = [
  { link: '/', label: 'About me' },
  { link: '/portfolio', label: 'Portfolio' },
];


function App() {
  

  return (
    <div>
      <HeaderMiddle links={links}></HeaderMiddle>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>  
  );
}

export default App;

