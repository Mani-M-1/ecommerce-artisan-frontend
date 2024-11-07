import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<OrderConfirmation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
