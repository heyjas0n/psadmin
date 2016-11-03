var DatePicker = require("react-bootstrap-date-picker");
 
var myDatePicker = React.createClass({
  getInitialState: function(){
    var value = new Date().toISOString();
    return {
      value: value
    }
  },
  handleChange: function(value) {
    // value is an ISO String. 
    this.setState({
      value: value
    });
  },
  render: function(){
    return <FormGroup>
      <ControlLabel>Label</ControlLabel>
      <DatePicker value={this.state.value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
    </FormGroup>;
  }
});

module.exports = myDatePicker;