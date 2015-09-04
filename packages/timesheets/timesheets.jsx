let PropTypes = React.PropTypes;
let Navigation = Router.Navigation;
import _ from 'lodash';

Timesheets = React.createClass({

  mixins: [Navigation],

  store: TimesheetStore,

  requestTimesheets: TimesheetActions.list,

  getInitialState () {
    return this.store.getState();
  },

  createNew () {
    return this.transitionTo(`/employees/${LoginStore.getUserId()}/timesheets`);
  },

  onChange () {
    this.setState(this.store.getState());
  },

  componentWillMount () {
    this.store.addChangeListener(this.onChange);
    this.requestTimesheets({page: 1});
  },

  componentWillUnmount () {
    this.store.removeChangeListener(this.onChange);
  },

  onPageChange (page) {
    this.requestTimesheets({page: page});
  },

  render () {

    let numPages = Math.ceil(this.state.timesheets.totalItems / 5);
    let pagesShown = Math.min(numPages, 5);

    return (
      <div>
        <div className="row">
          <SectionHeader header='Timesheets' />
        </div>
        <div className="row">
          <button className="ui right floated primary button pad-bottom" type="button" onClick={this.createNew}>
            New Timesheet
          </button>
        </div>

        <div className="row">
          <TimesheetTable timesheets={this.state.timesheets.data} store={this.store} />
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
