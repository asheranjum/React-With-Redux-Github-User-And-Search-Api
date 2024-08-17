import logo from './logo.svg';
import './App.css';
import List from './components/List/List';

function App() {
  return (
    <div className="App">

      <div className="container mt-4">
        <div className="row">
          <div className='col-md-12 mt-5 mb-5'>
            <h2>Github Users List</h2>
          </div>
          <List />
        </div>
      </div>

    </div>
  );
}

export default App;
