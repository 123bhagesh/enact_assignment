import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './MainRoutes/MainRoutes';
import { BottomBar } from './Component/Dashboard/BottomBar';

function App() {

  return (
    <div className="App" style={{position:'relative'}}>
      <BottomBar/>
      <MainRoutes />

    </div>
  );
}

export default App;
