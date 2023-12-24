import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <main className='bg-slate-200 h-screen w-screen'>
      <NavigationBar /> 
      <MainContent />
    </main>
  );
}

export default App;
