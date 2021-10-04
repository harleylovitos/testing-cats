import React from 'react';
import './App.scss';
import store from './redux/store'
import {Provider} from 'react-redux'
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';
import CatPage from './pages/CatPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Provider store={store}> 
    <div className="App">      
        <Router>
            <Switch>          
                <Route path="/:id">
                    <CatPage />
                </Route>
                <Route path="/">
                  <HomePage/>  
                </Route>
            </Switch>            
        </Router>
            
      </div>
    </Provider>
  );
}

export default App;
