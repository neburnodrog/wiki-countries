import React from 'react';
import './CountriesList.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountriesList() {
  const links = countries.map(country => (
    <ListGroupItem>
      {country.flag} <Link to={country.cca3}>{country.name.common}</Link>
    </ListGroupItem>
  ));

  return <ListGroup className="mt-4">{links}</ListGroup>;
}
