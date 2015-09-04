// Task component - represents a single todo item
Task = React.createClass({
  displayName: 'Task',

  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: {checked: ! this.props.task.checked}
    });
  },

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classNames('ui form item', {
      'checked' : this.props.task.checked
    });

    return (
      <div className={taskClassName}>
        <div className="fields">
          <div className="four wide field">
            <button className="ui button" onClick={this.deleteThisTask}>
              &times;
            </button>
          </div>
          <div className="two wide field">
            <input type="checkbox"
              readOnly={true}
              checked={this.props.task.checked}
              onClick={this.toggleChecked} />
          </div>
          <div className="ten wide field">
            <span className="text">{this.props.task.text}</span>
          </div>
        </div>
      </div>
    );
  }
});
