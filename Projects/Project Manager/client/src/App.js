import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductOne from './components/ProductOne';
import Main from './views/Main';


//Importing Main folder so that both the create and all pages can appear on one page
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/"/>
            <Route element={<ProductOne/>} path="/product/:id"/>

        </Routes>  
      </BrowserRouter>
    </div>
    );
}

export default App;
