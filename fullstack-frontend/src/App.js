import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './layout/Nav';
import Home from './Page/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
import ViewUser from './User/ViewUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/adduser" element={<AddUser />} ></Route>
          <Route exact path="/edituser/:id" element={<EditUser  />} ></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser  />} ></Route>

        </Routes>


      </Router>

    </div>
  );
}

export default App;
