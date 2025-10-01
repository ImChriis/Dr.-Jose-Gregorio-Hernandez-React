import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Biografy from './components/Biografy';
import Beatification from './components/Beatification';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

function App() {


  return (
    <div id='welcome' className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 w-full space-y-55'>
        <Welcome />
        <Biografy />
        <Beatification />
        <Legacy />
      </main>
      <Footer />
    </div>
  )
}

export default App
