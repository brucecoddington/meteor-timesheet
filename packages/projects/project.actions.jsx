ProjectActions = {

  LIST: 'LIST_PROJECTS',
  GET: 'GET_PROJECT',
  CREATE: 'CREATE_PROJECT',
  UPDATE: 'UPDATE_PROJECT',
  DELETE: 'DELETE_PROJECT',
  RESTORE: 'RESTORE_PROJECT',

  list (query) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.LIST,
      query: query
    });
  },

  get (id) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.GET,
      project: {_id: id}
    });
  },

  create (project) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.CREATE,
      project: project
    });
  },

  update (project) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.UPDATE,
      project: project
    });
  },

  remove (project) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.DELETE,
      project: project
    });
  },

  restore (project) {
    Dispatcher.handleViewAction({
      actionType: ProjectActions.RESTORE,
      project: project
    });
  }
};
