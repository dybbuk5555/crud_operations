import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import Create from './components/create.js';
import Read from './components/read.js';
import Update from './components/update.js';

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'>
          React CRUD Operations
        </h2>
        <Switch> 
          <Route exact path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
