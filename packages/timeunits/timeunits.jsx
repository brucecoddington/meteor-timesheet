let PropTypes = React.PropTypes;
let {Navigation, State as RouterState} = Router;
import _ from 'lodash';

Timeunits = React.createClass({

  propTypes: {
    timesheet: PropTypes.object.isRequired
  },

  mixins: [Navigation, RouterState],

  store: TimeunitStore,
  timesheetStore: TimesheetStore,

  requestTimeunits: TimeunitActions.list,

  getInitialState () {
    return this.store.getState();
  },

  logTime () {
    let timesheet = this.props.timesheet;
    this.transitionTo(`/employees/${timesheet.user_id}/timesheets/detail/${timesheet._id}/timeunits/create`);
  },

  onChange () {
    this.setState(this.store.getState());
  },

  onTimesheetChange () {
    this.requestTimeunits(this.props.timesheet);
  },

  componentWillMount () {
    this.requestTimeunits(this.props.timesheet);
    this.store.addChangeListener(this.onChange);
    this.timesheetStore.addChangeListener(this.onTimesheetChange);
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
    this.timesheetStore.removeChangeListener(this.onTimesheetChange);
  },

  render () {
    return (
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <h4 className="ui pad-bottom pad-top hard">Time Units</h4>
          </div>
          <div className="column">
            <button type="button" className="ui right floated primary button"
              onClick={this.logTime}>Log Time</button>
          </div>
        </div>

        <div className="sixteen wide column">
          <TimeunitTable timeunits={this.state.timeunits}
            timesheet={this.props.timesheet}
            store={this.store}/>
        </div>
      </div>
    );
  }
});
