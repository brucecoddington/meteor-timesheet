const CHANGE_EVENT = 'CHANGE_EVENT';

Store = _.extend(EventEmitter ,{

  getState () {
    return this.state;
  },

  setState (state) {
    this.state = _.extend(this.state, state);
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  register (events) {

    Dispatcher.register(payload => {
      let action = payload.action;
      let promise = events[action.actionType];

      if (!_.isUndefined(promise)) {
        promise.apply(this, [payload])
          .then(() => {
            this.emitChange();
          });
      }
      return true;
    });
  }
});
