let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;
import _ from 'lodash';

ProjectDetail = React.createClass({

  statics: {
    fetch (params) {
      return ProjectStore.get({action: {project: params}})
        .then(res => {return ProjectStore.getState()});
    }
  },

  mixins: [Navigation, ProjectMixin],

  store: ProjectStore,

  saveProject (event) {
    event.preventDefault();
    this.validateAll();

    if (!this.hasErrors()) {
      ProjectActions.update(this.state.project);
      this.transitionTo('/projects');
    }
  },

  get (projectId) {
    let project = this.store.getState().project;
    if (_.isEmpty(project)) {
      ProjectActions.get(projectId);
    }
  },

  getInitialState () {
    return _.defaults(this.store.getState(), {
      saveText: 'Update',
      errors: {}
    });
  },

  onChange () {
    this.setState(this.store.getState());
  },

  componentWillMount () {
    this.get(this.props.params._id);
    this.store.addChangeListener(this.onChange);
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
  },

  render  () {
    return (
      <div>
        <div className="row">
          <SectionHeader header='Edit Project' />
        </div>
        <ProjectForm project={this.state.project}
          errors={this.state.errors}
          validateAll={this.validateAll}
          hasErrors={this.hasErrors}
          saveText={this.state.saveText}
          onSave={this.saveProject}
          validate={this.validate}/>
      </div>
    );
  }
});
