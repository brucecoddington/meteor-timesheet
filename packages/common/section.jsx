let PropTypes = React.PropTypes;

SectionHeader = React.createClass({

  propTypes : {
    'header': PropTypes.string.isRequired
  },

  render  () {

    return (
      <div className="row">
        <div className="sixteen wide column">
          <h2>{this.props.header}</h2>
          <hr/>
        </div>
      </div>
    );
  }
});
