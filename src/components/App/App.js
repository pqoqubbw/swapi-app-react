import React, { useState } from 'react';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authorization from '../Authorization/Authorization';
import InfoPages from '../InfoPages/InfoPages';

const App = () => {
  const [people, setPeople] = useState([{ like: false }]);
  const [code, setCode] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInPopUp} />
        <Route
          exact
          path="/"
          render={() => (
            <Authorization
              code={code}
              setCode={setCode}
              setPeople={setPeople}
              people={people}
            />
          )}
        />
        <Route
          path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            return (
              <InfoPages
                itemId={id}
                setPeople={setPeople}
                people={people}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
