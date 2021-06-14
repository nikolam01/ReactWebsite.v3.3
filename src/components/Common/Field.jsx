import React from 'react'

function Field() {
  return (
    <div className="form-group">
      {this.props.elementName === 'input' ? (
        <input
          className="form-control"
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          required="required"
          data-validation-required-message={this.props.validation}
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
      ) : (
        <textarea
          className="form-control"
          required="required"
          data-validation-required-message="Please enter a message."
          id={this.props.name}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
      )}
      <p className="help-block text-danger">
        {this.props.touched && this.props.errors && (
          <span> {this.props.errors} </span>
        )}
      </p>
    </div>
  )
}
export default Field
