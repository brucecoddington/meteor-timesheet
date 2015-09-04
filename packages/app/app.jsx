// App component - represents the whole app
App = React.createClass({

  displayName: 'AppContainer',

  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },

  handleSubmit (event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  render () {
    return (
      <div className="ui container">
        <header>
          <h1>Todo List</h1>

          <form className="ui form new-task" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
          </form>
        </header>

        <div className="ui relaxed divided list">
          {this.data.tasks.map(task => {
            return <Task key={task._id} task={task} />;
          })}
        </div>
      </div>
    );
  }
});
