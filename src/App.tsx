import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Biografy from './components/Biografy';
import Santification from './components/Santification';
import Beatification from './components/Beatification';
import Legacy from './components/Legacy';
import Prayer from './components/Prayer';
import Footer from './components/Footer';

function App() {


  return (
    <div id='welcome' className='w-screen min-h-screen flex flex-col overflow-x-hidden'>
      <Navbar />
      <main className='flex-1 w-full'>
        <Welcome />
        <Biografy />
        <Santification />
        <Beatification />
        <Legacy />
        <Prayer />
      </main>
      <Footer />
    </div>
  )
}

export default App
