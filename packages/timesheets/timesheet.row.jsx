let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;
import classNames from 'classnames';

TimesheetRow = React.createClass({

  propTypes: {
    timesheet: PropTypes.object,
    store: PropTypes.object.isRequired
  },

  mixins: [
    Navigation
  ],

  showDetail () {
    let timesheet = this.props.timesheet;
    if (timesheet.deleted) {
      SnackbarAction.error('You cannot edit a deleted timesheet.');
      return;
    }
    this.props.store.setState({timesheet: timesheet});
    this.transitionTo(`/employees/${timesheet.user_id}/timesheets/detail/${timesheet._id}`);
  },

  remove (e) {
    e.stopPropagation();
    this.props.timesheet.deleted = true;
    TimesheetActions.remove(this.props.timesheet);
  },

  restore (e) {
   e.stopPropagation();
   this.props.timesheet.deleted = false;
   TimesheetActions.restore(this.props.timesheet);
  },

  render () {
    let timesheet = this.props.timesheet;

    let rowClasses = classNames('repeated-item fadeable-row', {
      'faded': timesheet.deleted
    });

    let buttonClasses = classNames('ui primary button small', {
      'positive': timesheet.deleted,
      'negative': !timesheet.deleted
    });

    return (
      <tr className={rowClasses} onClick={this.showDetail}>

        <td>{DateUtils.momentShortDate(timesheet.beginDate)}</td>
        <td>{DateUtils.momentShortDate(timesheet.endDate)}</td>
        <td>{timesheet.name}</td>
        <td>{timesheet.description}</td>
        <td>
          <button className={buttonClasses} onClick={timesheet.deleted ? this.restore : this.remove}>
            {timesheet.deleted ? 'Restore' : 'Delete'}
          </button>
        </td>
      </tr>
    );
  }
});
