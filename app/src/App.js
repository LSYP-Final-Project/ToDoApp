import { Route, Switch } from 'react-router';
import {NavBar, PageNotFound} from 'Core/components';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {MainContainer} from 'Core/styledComponents'
import { UsersView } from './users-section/containers/UsersView';
import { MainPage } from 'Modules/MainPage';
import { DetailsTask, TaskView } from "Modules/tasks";
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
          <Route component={PageNotFound} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
