TimesheetActions = {

  LIST: 'LIST_TIMESHEETS',
  GET: 'GET_TIMESHEET',
  CREATE: 'CREATE_TIMESHEET',
  UPDATE: 'UPDATE_TIMESHEET',
  DELETE: 'DELETE_TIMESHEET',
  RESTORE: 'RESTORE_TIMESHEET',

  list (query) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.LIST,
      query: query
    });
  },

  get (id) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.GET,
      timesheet: {_id: id}
    });
  },

  create (timesheet) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.CREATE,
      timesheet: timesheet
    });
  },

  update (timesheet) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.UPDATE,
      timesheet: timesheet
    });
  },

  remove (timesheet) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.DELETE,
      timesheet: timesheet
    });
  },

  restore (timesheet) {
    Dispatcher.handleViewAction({
      actionType: TimesheetActions.RESTORE,
      timesheet: timesheet
    });
  }
};
