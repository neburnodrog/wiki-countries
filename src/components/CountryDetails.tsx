import React from 'react';
import countries from '../countries.json';
import { RouteComponentProps, Link } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface CountryDetailsProps extends RouteComponentProps<MatchParams> {}

class CountryDetails extends React.Component<CountryDetailsProps> {
  renderBorders = () => {
    const countryCode = this.props.match.params.id;
    const country = countries.find(country => country.cca3 === countryCode);

    if (!country) return <p>country not found</p>;

    const borders = country.borders.map((border: string) => {
      const borderCountry = countries.find(country => border === country.cca3);
      return borderCountry
        ? {
            name: borderCountry.name.common,
            code: borderCountry.cca3,
          }
        : { name: '', code: '' };
    });

    if (!borders) return <p>no borders found</p>;

    return (
      <ul>
        {borders.map(border => (
          <li>
            <Link to={border.code}>{border.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const countryCode = this.props.match.params.id;
    const country = countries.find(country => country.cca3 === countryCode);

    if (!country) return <p>country not found</p>;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <hr />
        <h5>Capital: {country.capital}</h5>
        <hr />
        <h5>Area: {country.area} km2</h5>
        <hr />
        <h5>Borders: </h5> {this.renderBorders()}
      </div>
    );
  }
}

export default CountryDetails;
