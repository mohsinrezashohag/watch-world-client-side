import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import AddWatches from './Pages/Dashboard/AddWatches/AddWatches';
import OurWatches from './Pages/OurWatches/OurWatches/OurWatches';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DetailsBook from './Pages/OurWatches/DetailsBook/DetailsBook';

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>



            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>


            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/ourWatches">
              <OurWatches></OurWatches>
            </Route>

            <PrivateRouter exact path="/addWatches">
              <AddWatches></AddWatches>
            </PrivateRouter>



            <PrivateRouter path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRouter>

            <PrivateRouter path='/watch/:id'>
              <DetailsBook></DetailsBook>
            </PrivateRouter>






          </Switch>
        </BrowserRouter>

      </AuthProvider>



    </div>
  );
}

export default App;
