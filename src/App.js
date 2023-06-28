import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './MainRoutes/MainRoutes';
import { BottomBar } from './Component/BottomBar';

function App() {

  return (
    <div className="App">
      <MainRoutes />
      <BottomBar/>

    </div>
  );
}

export default App;
