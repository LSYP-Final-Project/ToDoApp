import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Route, Switch } from 'react-router';
import { NavBar, PageNotFound } from 'Core/components';
import { MainContainer } from 'Core/styledComponents'
import { UsersView } from 'Modules/users/containers/UsersView';
import { MainPage } from 'Modules/MainPage';
import { DetailsTask, TaskView } from "Modules/tasks";
import RegisterView from 'Modules/login/containers/RegisterView';
import SprintsView from 'Modules/sprints/containers/SprintsView';

function App() {
  return (
    <>
      <NavBar />

      <MainContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/users/:user_id?" component={UsersView} />
          <Route exact path="/tasks/" component={TaskView} />
          <Route exact path='/sprints' component={SprintsView} />
          <Route exact path="/tasks/:task_id/" component={DetailsTask} />
          <Route exact path='/register' component={RegisterView} />
          <Route component={PageNotFound} />
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
