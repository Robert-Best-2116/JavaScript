import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductOne from './components/ProductOne';
import ProductEdit from './components/ProductEdit';
import Main from './views/Main';


//Importing Main folder so that both the create and all pages can appear on one page
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/"/>
            <Route element={<ProductOne/>} path="/product/:id"/>
            <Route element={<ProductEdit/>} path="/product/edit/:id" />

        </Routes>  
      </BrowserRouter>
    </div>
    );
}

export default App;
