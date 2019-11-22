import React from 'react'
import axios from 'axios'

class EditEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dreamName: this.props.dreamName,
      dreamText: this.props.dreamText,
    }
  }

  genericSync = (event) => {
    console.log("Change logged from genericSync: ", event.target.value)
    const { name, value } = event.target
    this.setState({ [name]: value })
    // console.log('From state~~~~~~~~~~~~~~~~' + this.state.dreamName, this.state.dreamText);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('State inside handle submit~~~~~~~~~' + this.state);

    axios.post(`${process.env.REACT_APP_API_URL}/update/${this.props.id}`, this.state, { withCredentials: true })
      .then(res => {
        console.log("Success! Update has been sumbitted:===>>>", res)
        // this.props.history.push('/dashboard')
      })
      .catch(err => {
        console.log("Error submitting update:===>>> ", err)
      })
  }


  render(props) {
    // const { dreamName, dreamText } = this.state

    return (
      <div className='card is-rounded form-style' >

        <form onSubmit={event => this.handleSubmit(event)}>
          <h2 className="title">Add Dream Details</h2>
          <div className="field">
            <label className="label">Dream Name</label>
            <div className="control">
              <input
                className="input"
                value={this.state.dreamName}
                onChange={event => this.genericSync(event)}
                type='text'
                name='dreamName'
              />
            </div>
            <div className="control">
              <input
                className="textarea"
                value={this.state.dreamText}
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