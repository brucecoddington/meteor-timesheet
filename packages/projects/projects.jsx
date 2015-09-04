let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;

import _ from 'lodash';

Projects = React.createClass({

  mixins: [Navigation],

  store: ProjectStore,

  requestProjects: ProjectActions.list,

  getInitialState () {
    return this.store.getState();
  },

  createNew () {
    this.transitionTo('/projects/create');
  },

  onChange () {
    this.setState(this.store.getState());
  },

  componentWillMount () {
    this.store.addChangeListener(this.onChange);
    this.requestProjects({page: 1});
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
  },

  onPageChange (page) {
    this.requestProjects({page: page});
  },

  render () {

    let numPages = Math.ceil(this.state.projects.totalItems / 5);
    let pagesShown = Math.min(numPages, 5);

    return (
      <div>
        <div className="row">
          <SectionHeader header='Projects' />
        </div>

        <div className="one column row">
          <button className="ui right floated primary button pad-bottom" type="button" onClick={this.createNew}>
            New Project
          </button>
        </div>

        <div className="row">
          <ProjectTable projects={this.state.projects.data} store={ProjectStore}/>
        </div>

        <div className="ui grid pad-top">
          <div className="centered row">
            <Paginator max={numPages} maxVisible={pagesShown} onChange={this.onPageChange} />
          </div>
        </div>
      </div>
    );
  }
});
