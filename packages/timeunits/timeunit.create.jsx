let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;

TimeunitCreate = React.createClass({

  mixins: [Navigation, TimeunitMixin],

  store: TimeunitStore,
  timesheetStore: TimesheetStore,

  getInitialState () {
    return {
      saveText: 'Save',
      timeunit: {},
      errors: {}
    };
  },

  saveTimeunit (e) {
    e.preventDefault();
    this.validateAll();

    if (!this.hasErrors()) {
      TimeunitActions.create(this.state.timesheet, this.state.timeunit);
      this.transitionTo(`/employees/${this.state.timesheet.user_id}/timesheets/${this.state.timesheet._id}`);
    }
  },

  getTimesheet (timesheetId) {
    let timesheet = this.timesheetStore.getState().timesheet;
    if (!timesheet._id) {
      TimesheetActions.get(timesheetId);
    }
    else {
      this.onTimesheetChange();
    }
  },

  onTimesheetChange () {
    this.setState({timesheet: this.timesheetStore.getState().timesheet});
  },

  componentWillMount () {
    this.timesheetStore.addChangeListener(this.onTimesheetChange);
  },

  componentDidMount () {
    this.getTimesheet(this.props.params._id);
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onTimesheetChange);
  },

  render () {
    return (
      <div>
        <div className="row">
          <SectionHeader header='Log Time' />
        </div>
        <TimeunitForm timeunit={this.state.timeunit}
          errors={this.state.errors}
          validateAll={this.validateAll}
          hasErrors={this.hasErrors}
          saveText={this.state.saveText}
          onSave={this.saveTimeunit}
          validate={this.validate}
          validateProject={this.validateProject}
          validateDateWorked={this.validateDateWorked}
          params={this.props.params} />
      </div>
    );
  }
});
