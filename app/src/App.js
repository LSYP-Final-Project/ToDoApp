import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { UsersView } from './modules/users/containers/UsersView';
import { Redirect, Route, Switch } from 'react-router'
import NavBar from './core/components/index';
import RegisterForm from './core/components/RegisterForm';
import SprintsView from './modules/sprints/containers/SprintsView';
import PageDoesNotExist from './core/components/PageDoesNotExist';
import DetailsTask from "./modules/tasks/components/DetailsTask";
import TaskView from './modules/tasks/containers/TaskView';

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path='/' exact={true} to="/users" />
        <Route path='/users' component={UsersView} />
        <Route exact path="/tasks/" component={TaskView} />
        <Route exact path="/tasks/:task_id/" component={DetailsTask} />
        <Route path='/sprints' component={SprintsView} />
        <Route path='/register' component={RegisterForm} />
        <Route path='*' component={PageDoesNotExist} />
      </Switch>
    </>
  );
}

export default App;
