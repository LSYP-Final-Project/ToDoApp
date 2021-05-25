import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './users-section/containers/UsersView';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <UsersView/>
        </div>
      </div>
    </div>

  );
}

export default App;
