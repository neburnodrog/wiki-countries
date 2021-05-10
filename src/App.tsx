import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetails';

class App extends React.Component {
  render = () => {
    return (
      <>
        <NavBar />

        <Container>
          <Row>
            <Col xs={5} style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <CountriesList />
            </Col>
            <Col xs={7}>
              <Route exact path="/:id" component={CountryDetail} />
            </Col>
          </Row>
        </Container>
      </>
    );
  };
}

export default App;
