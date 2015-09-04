TimeunitActions = {

  LIST: 'LIST_TIMEUNITS',
  GET: 'GET_TIMEUNIT',
  CREATE: 'CREATE_TIMEUNIT',
  UPDATE: 'UPDATE_TIMEUNIT',
  DELETE: 'DELETE_TIMEUNIT',
  RESTORE: 'RESTORE_TIMEUNIT',

  list (timesheet, query) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.LIST,
      timesheet: timesheet,
      query: query
    });
  },

  get (timesheet, id) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.GET,
      timeunit: {_id: id},
      timesheet: timesheet
    });
  },

  create (timesheet, timeunit) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.CREATE,
      timeunit: timeunit,
      timesheet: timesheet
    });
  },

  update (timesheet, timeunit) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.UPDATE,
      timeunit: timeunit,
      timesheet: timesheet
    });
  },

  remove (timesheet, timeunit) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.DELETE,
      timeunit: timeunit,
      timesheet: timesheet
    });
  },

  restore (timesheet, timeunit) {
    Dispatcher.handleViewAction({
      actionType: TimeunitActions.RESTORE,
      timeunit: timeunit,
      timesheet: timesheet
    });
  }
};

export default TimeunitActions;
