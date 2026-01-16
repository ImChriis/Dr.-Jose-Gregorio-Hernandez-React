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
    <div id='welcome' className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 w-full space-y-55'>
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
