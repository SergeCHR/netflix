import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import {Browse} from './pages/browse'
import {Signin} from './pages/signin'
import {Signup} from './pages/signup'
import { ProtectedRoute, IsUserRedirect } from './helpers/routes';
import * as ROUTES from './constants/routes'
function App() {
  const user = null;
  return (
    <Router>
      <Switch>
      <IsUserRedirect exact path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE} user={user}>
        <Home/>
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} loggedInPath={ROUTES.BROWSE} user={user}>
        <Browse/>
      </ProtectedRoute>
      <IsUserRedirect user={user} exact path={ROUTES.SIGN_IN} loggedInPath={ROUTES.BROWSE}>
        <Signin/>
      </IsUserRedirect>
      <IsUserRedirect user={user} exact path={ROUTES.SIGN_UP} loggedInPath={ROUTES.BROWSE}>
        <Signup/>
      </IsUserRedirect>
      </Switch>
    </Router>
  )}

export default App;
