import { Outlet } from 'react-router-dom';
import { Footer2 } from './components/Footer2';
import { HeaderMiddle } from './components/Header';

export const links = [
  { link: '/', label: 'About me' },
  { link: '/portfolio', label: 'Portfolio' },
];


function App() {
  const footerLinks = [
    {
      title: "Contact",
      links: [
        { label: "Mimmi Collin", link: "/link1" },
        { label: "0730506955", link: "/link2" },
        { label: "mimmi.collin@medieinstitutet.se", link: "/link3" },

      ],
    },
  ];
  

  return (
    <div>
      <HeaderMiddle links={links}></HeaderMiddle>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer2 data={footerLinks}></Footer2>
    </div>  
  );
}

export default App;

