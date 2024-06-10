import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AddFriend/>} />
            <Route path='/View' element={<View/>} />

        </Routes>

        
        </BrowserRouter>
     
        
        

   
  );
}

export default App;
