import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar/>
        {/* Content */}
      </div>
    </div>
  );
}

export default App;
