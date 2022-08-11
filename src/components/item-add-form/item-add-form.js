import React, {Component} from "react" ;

import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  handleChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({label: ''})
  }

  render() {

    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          placeholder="Add New Todo Here"
          value={this.state.label}>
        </input>
        <button className="btn btn-outline-secondary ">
          <i className="fa fa-plus" aria-hidden="true"/>
        </button>
      </form>
    );
  }

};

