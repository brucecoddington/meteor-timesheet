let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;

TimesheetCreate = React.createClass({

  mixins: [Navigation, TimesheetMixin],

  store: TimesheetStore,

  getInitialState () {
    return {
      saveText: 'Create',
      timesheet: {},
      errors: {}
    };
  },

  saveTimesheet (event) {
    event.preventDefault();
    this.validateAll();

    if (!this.hasErrors()) {
      TimesheetActions.create(this.state.timesheet);
      this.transitionTo(`/employees/${this.state.timesheet.user_id}/timesheets`);
    }
  },

  render () {
    return (
      <div>
        <div className="row">
          <SectionHeader header='Create Timesheet' />
        </div>
        <TimesheetForm timesheet={this.state.timesheet}
          saveText={this.state.saveText}
          errors={this.state.errors}
          hasErrors={this.hasErrors}
          onSave={this.saveTimesheet}
          validate={this.validate}
          validateAll={this.validateAll}
          validateBeginDate={this.validateBeginDate}
          validateEndDate={this.validateEndDate}/>
      </div>
    );
  }
});
