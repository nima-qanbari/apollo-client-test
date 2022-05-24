import './App.css';
import {Routes, Route} from "react-router-dom"
import MoviesList from './pages/MoviesList';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MoviesList />} />
        <Route path='/:id' element={<Movie />} />
      </Routes>
      
    </div>
  );
}

export default App;
