import React from 'react/addons';
import Router from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';

progress();

// Fire off the router and get the app rolling
// LoginStore.current().then(() => {
  React.render(<Router history={history} children={AppRoutes}/>, document.getElementById('app'));
// });
