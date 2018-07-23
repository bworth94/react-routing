import React from 'react'
import Favoritethings from './FavoriteThings'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Things = ({ match }) => (
    <div>
      <h2>Favorite Things</h2>
      <ul>
        <li>
          <Link to={`${match.url}/fatherhood`}>Dadding</Link>
        </li>
        <li>
          <Link to={`${match.url}/husbandhood`}>Husbanding</Link>
        </li>
        <li>
          <Link to={`${match.url}/havingfun`}>Having Fun</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Favoritethings} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select an awesome activity.</h3>}
      />

    </div>
)

export default Things;

