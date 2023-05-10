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
      title: "About",
      links: [
        { label: "Paw-sibilities", link: "/link1" },
        { label: "Purr-ivacy Paw-licy", link: "/link2" },
        { label: "About Our Nine Lives", link: "/link3" },
        { label: "Veterinary", link: "/link3" },
        { label: "Terms of Purr-vice", link: "/link3" },
      ],
    },
    // Add more groups with links as needed
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

