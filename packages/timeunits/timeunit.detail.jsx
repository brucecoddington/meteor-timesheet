let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;

TimeunitDetail = React.createClass({

  mixins: [Navigation, TimeunitMixin],

  store: TimeunitStore,
  timesheetStore: TimesheetStore,

  getInitialState () {
    return _.defaults(this.store.getState(), {
      saveText: 'Update',
      errors: {}
    });
  },

  onChange () {
    this.setState(this.store.getState());
  },

  onTimesheetChange () {
    this.setState({timesheet: this.timesheetStore.getState().timesheet});
  },

  componentWillMount () {
    this.store.addChangeListener(this.onChange);
    this.timesheetStore.addChangeListener(this.onTimesheetChange);
  },

  componentDidMount () {
    this.getTimesheet(this.props.params._id);
    this.get(this.props.params._id, this.props.params.timeunit_id);
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
    this.timesheetStore.removeChangeListener(this.onTimesheetChange);
  },

  get (timesheetId, timeunitId) {
    let timeunit = this.store.getState().timeunit;
    if (!timeunit._id) {
      TimeunitActions.get({_id: timesheetId}, timeunitId);
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

  saveTimeunit (e) {
    e.preventDefault();
    this.validateAll();

    if (!this.hasErrors()) {
      TimeunitActions.update(this.state.timesheet, this.state.timeunit);
      this.transitionTo(`/employees/${this.state.timesheet.user_id}/timesheets/${this.state.timesheet._id}`);
    }
  },

  render () {
    return (
      <div>
        <div className="row">
          <SectionHeader header='Update Time' />
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
