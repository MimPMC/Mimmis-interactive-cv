import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>  
  );
}

export default App;

