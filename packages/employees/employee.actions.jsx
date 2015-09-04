EmployeeActions = {

  LIST: 'LIST_EMPLOYEES',
  GET: 'GET_EMPLOYEE',
  CREATE: 'CREATE_EMPLOYEE',
  UPDATE: 'UPDATE_EMPLOYEE',
  DELETE: 'DELETE_EMPLOYEE',
  RESTORE: 'RESTORE_EMPLOYEE',

  list (query) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.LIST,
      query: query
    });
  },

  get (id) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.GET,
      employee: {_id: id}
    });
  },

  create (employee) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.CREATE,
      employee: employee
    });
  },

  update (employee) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.UPDATE,
      employee: employee
    });
  },

  remove (employee) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.DELETE,
      employee: employee
    });
  },

  restore (employee) {
    Dispatcher.handleViewAction({
      actionType: EmployeeActions.RESTORE,
      employee: employee
    });
  }
};
