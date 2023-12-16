import './App.css'

/** Components */
import Navbar from './conponents/Navbar';  
import Contact from './conponents/Contact';
import ChatBoard from './conponents/ChatBoard';
import Directory from './conponents/Directory';

function App() {

  return (
    <>
      <main className="w-screen h-screen flex flex-row">
        <Navbar />
        <Contact />
        <ChatBoard />
        <Directory />
      </main>
    </>
  );
}

export default App;
