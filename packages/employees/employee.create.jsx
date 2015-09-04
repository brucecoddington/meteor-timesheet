let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;

EmployeeCreate = React.createClass({

  mixins : [Navigation, EmployeeMixin],

  store: EmployeeStore,

  onChange () {
    this.setState(this.store.getState());
  },

  componentWillMount () {
    this.store.addChangeListener(this.onChange);
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
  },

  getInitialState () {
    return {
      saveText: 'Create',
      employee: {
        admin:false
      },
      errors: {}
    };
  },

  saveEmployee (event) {
    event.preventDefault();
    this.validateAll();

    if (!this.hasErrors()) {
      EmployeeActions.create(this.state.employee);
      this.transitionTo('/employees');
    }
  },

  render  () {
    return (
      <div>
        <div className="row">
          <SectionHeader header='Timesheets' />
        </div>
        <EmployeeForm employee={this.state.employee}
          errors={this.state.errors}
          validateAll={this.validateAll}
          hasErrors={this.hasErrors}
          saveText={this.state.saveText}
          onSave={this.saveEmployee}
          validate={this.validate}
          toggleAdmin={this.toggleAdmin} />
      </div>
    );
  }
});
