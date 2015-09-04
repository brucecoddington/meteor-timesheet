Properties = {

  appName: "timesheet-api",

  session : {
    secret : "d0853b30-3d95-11e2-a25f-0800200c9a66", // uuid hash
    expires : 3 * 24 * 60 * 60 * 1000,
    key : 'timesheet.sid'
  },

  security : {
    cookieSecret: 'timesheet-cookie-secret'
  },

  server : {
    url: (function () {
      if (Meteor.isClient()) {
        return false;
      }
      else {
        return 'http://localhost';
      }
    }()),
    port: (function () {
      if (Meteor.isClient()) {
        return window.PORT || 5000;
      }
      else {
        return ~~process.env.PORT || 5000;
      }
    }())
  }
};
