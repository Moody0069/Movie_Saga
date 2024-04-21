// import { Route, HashRouter as Router } from 'react-router-dom';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <switch>
          <Route path= "/" excat componet={MovieList}/>
          <Route path= "Details" componet ={MovieDetail}/>
        </switch>
      
        
      </Router>
    </div>
  );
}

export default App;
