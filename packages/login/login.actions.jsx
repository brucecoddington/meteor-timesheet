LoginActions = {

  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CURRENT_USER: 'CURRENT_USER',

  currentUser () {
    Dispatcher.handleViewAction({
      actionType: LoginActions.CURRENT_USER
    });
  },

  login (credentials) {
    Dispatcher.handleViewAction({
      actionType: LoginActions.LOGIN,
      credentials: credentials
    });
  },

  logout () {
    Dispatcher.handleViewAction({
      actionType: LoginActions.LOGOUT
    });
  }
};
