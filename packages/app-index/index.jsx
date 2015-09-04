// Use Meteor.startup to render the component after the page is ready
Meteor.startup(function () {
  React.render(<App />, document.getElementById("app"));

  // React.render(<Router history={Router.lib.BrowserHistory.history} children={AppRoutes}/>, document.getElementById('app'));

});
