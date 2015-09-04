import _ from 'lodash';
let PropTypes = React.PropTypes;

App = React.createClass({

  statics: {
    // willTransitionTo (transition, params) {
    //   return LoginStore.requireAuthenticatedUser(transition);
    // }
  },

  render () {

    return (
      <div>
        <NavBar {...this.props}/>
        <div className="container">
          {this.props.children}
        </div>

        <Snackbar />
      </div>
    );
  }
});
