import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AuthorsAll from './components/AuthorsAll';
import AuthorOne from './components/AuthorOne';
import AuthorEdit from './components/AuthorEdit';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route element={< AuthorsAll />} path="/" />
            <Route element={< AuthorForm />} path="/author" />
            <Route element={< AuthorOne />} path="/author/:id" />
            <Route element={< AuthorEdit />} path="/author/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
