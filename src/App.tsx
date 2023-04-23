import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { HeaderMiddle } from './components/Header';

function App() {
  const links = [
    { link: '/', label: 'About me' },
    { link: '/portfolio', label: 'Portfolio' },
  ];

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

