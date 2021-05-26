import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './users-section/containers/UsersView';
import ExampleServices from './ExampleServices'
import NavBar from './core/components/index';

function App() {
  return (
    <>
      {/* <ExampleServices/> */}
      <NavBar />
      <div className="container">
          <div className="row">
            <div className="col">
              <UsersView/>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
