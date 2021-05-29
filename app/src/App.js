import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './modules/users/containers/UsersView';
import ExampleServices from './ExampleServices'
import NavBar from './core/components/index';

function App() {
  return (
    <>
      {/* <ExampleServices/> */}
      <NavBar />
      <UsersView />
    </>
  );
}

export default App;
