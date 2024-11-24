import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './App.css';


import TopPage from './components/TopPage.js';
import Page1 from './components/Page1.js';

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Router>
        <Button variant="primary" onClick={handleShow}>
          Open Sidebar
        </Button>

        <Offcanvas show={show} onHide={handleClose} >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title>Sample Pages</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li><Link to='/top' style={{textDecoration: 'none', color: 'black'}}>Top page</Link></li>
              <li><Link to='/page1' style={{textDecoration: 'none', color: 'black'}}>page1</Link></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <Routes>
          <Route path="/top" element={<TopPage />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
