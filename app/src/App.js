import ExampleServices from './ExampleServices'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {NavBar} from './core/components';
import {MainContainer} from './core/styledComponents'
import { UsersView } from './users-section/containers/UsersView';
import { DetailsTask, TaskView } from "./modules/tasks";
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      {/* <ExampleServices/> */}
      <NavBar />
      <MainContainer>
        <Switch>
          <Route exact path="/users" component={UsersView} />
          <Route exact path="/tasks/" component={TaskView} />
          <Route exact path="/tasks/:task_id/" component={DetailsTask} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
