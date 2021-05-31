import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './modules/users/containers/UsersView';
import { Redirect, Route, Switch } from 'react-router'
import ExampleServices from './ExampleServices'
import NavBar from './core/components/index';
import RegisterForm from './core/components/RegisterForm';
import SprintsView from './modules/sprints/SprintsView';
import PageDoesNotExist from './core/components/PageDoesNotExist';

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path='/' exact={true} to="/users" />
        <Route path='/users' component={UsersView} />
        <Route path='/sprints' component={SprintsView} />
        <Route path='/register' component={RegisterForm} />
        <Route path='*' component={PageDoesNotExist} />
      </Switch>
    </>
  );
}

export default App;
