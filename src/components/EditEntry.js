import React from 'react'

class EditEntry extends React.Component {
  // const EditEntry = (props) => {
  // console.log("TESTING THE PROPS======>>>>" + props.dreamName);


  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render(props) {

    return (
      <div className='card is-rounded form-style' >

        <form onSubmit={event => this.handleSubmit(event)}>
          <h2 className="title">Add Dream Details</h2>
          <div className="field">
            <label className="label">Dream Name</label>
            <div className="control">
              <input
                className="input"
                value={this.props.dreamName}
                onChange={event => this.genericSync(event)}
                type='text'
                name='dreamName'
                placeholder={this.props}
              />
            </div>
            <div className="control">
              <input
                className="textarea"
                value={this.props.dreamText}
                onChange={event => this.genericSync(event)}
                type='textarea'
                name='dreamText'
              />
            </div>
          </div>

          <button className="button is-primary">Submit Changes</button>
        </form>
      </div>
    )

  }


}


export default EditEntry 