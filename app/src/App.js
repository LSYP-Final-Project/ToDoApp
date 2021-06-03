import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './modules/users/containers/UsersView';
import ExampleServices from './ExampleServices'
import NavBar from './core/components/index';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      {/* <ExampleServices/> */}
      <NavBar />
      <Switch>
        <Route path="/users/" component={UsersView}/>
        <Route path="/users/:user_id/" component={UsersView}/>
      </Switch>
    </>
  );
}

export default App;
