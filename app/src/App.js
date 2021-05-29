import { Route, Switch } from 'react-router';
import {NavBar} from './core/components';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {MainContainer} from './core/styledComponents'
import { UsersView } from './users-section/containers/UsersView';
import { MainPage } from './modules/MainPage';
import { DetailsTask, TaskView } from "./modules/tasks";
import ExampleServices from './ExampleServices'

function App() {
  return (
    <>
      {/* <ExampleServices/> */}
      <NavBar />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users" component={UsersView} />
          <Route exact path="/tasks/" component={TaskView} />
          <Route exact path="/tasks/:task_id/" component={DetailsTask} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
