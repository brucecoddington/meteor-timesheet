// Initialize the routes
AppRoutes = {
  path: '/', component: Index,
  childRoutes: [
    {path: 'login', component: Login},
    {path: '/', component: App,
      childRoutes: [
        {path: 'projects', component: Projects},
        {path: 'projects/detail/:_id', component: ProjectsDetail},
        {path: 'projects/create', component: ProjectsCreate},

        {path: 'employees', component: Employees},
        {path: 'employees/detail/:_id', component: EmployeesDetail},
        {path: 'employees/create', component: EmployeesCreate},

        {path: 'employees/:user_id/timesheets', component: Timesheets},
        {path: 'employees/:user_id/timesheets/create', component: TimesheetsCreate},
        {path: 'employees/:user_id/timesheets/detail/:_id', components: TimesheetsDetail},

        {path: 'employees/:user_id/timesheets/detail/:_id/timeunits/create', component: TimeunitsCreate},
        {path: 'employees/:user_id/timesheets/detail/:_id/timeunits/detail/:timeunit_id', component: TimeunitsEdit}
      ]
    }
  ]
};
