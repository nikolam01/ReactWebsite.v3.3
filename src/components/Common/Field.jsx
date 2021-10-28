const Field = (props) => {
  return (
    <div className="form-group">
      {props.elementName === 'input' ? (
        <input
          className="form-control"
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required="required"
          data-validation-required-message={props.validation}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      ) : (
        <textarea
          className="form-control"
          required="required"
          data-validation-required-message="Please enter a message."
          id={props.name}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      )}
      <p className="help-block text-danger">
        {props.touched && props.errors && <span> {props.errors} </span>}
      </p>
    </div>
  )
}
export default Field
