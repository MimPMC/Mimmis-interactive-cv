import { Outlet } from 'react-router-dom';
import { FooterSocial } from './components/Footer';
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
      <FooterSocial></FooterSocial>
    </div>  
  );
}

export default App;

