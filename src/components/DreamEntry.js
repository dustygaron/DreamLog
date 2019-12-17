import React from 'react'
import axios from 'axios'

export default class DreamEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dreamName: this.props.obj.dreamName,
      dreamText: this.props.obj.dreamText,
      show: false,
    }
    // console.log("THIS IS STATE===>>>" + this.state.dreamName, this.state.dreamText)
  }

  delete = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/delete/${this.props.obj._id}`)
      .then(console.log('Success! Dream was deleted from DB.' + this.props.obj._id))
      .then(window.location.reload(false))
      .catch(err => console.log(err))
  }

  edit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/edit/${this.props.obj._id}`)
      .then(console.log('Success! Retrieved single dream from DB.===>>>' + this.props.obj._id, this.props.obj.dreamName, this.props.obj.dreamText))
      .then(this.setState({
        show: true,
        dreamName: this.props.obj.dreamName,
        dreamText: this.props.obj.dreamText,
      }))
      // .then(window.location.reload(false))
      .catch(err => console.log(err))
  }

  hideModal = () => {
    this.setState({ show: false });
  }


  // EDIT ENTRY -------------------------
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
      .then(this.hideModal())

      // .then(window.location.reload(false))
      .catch(err => {
        console.log("Error submitting update:===>>> ", err)
      })
  }

  successMessage = () => {
    this.setState({
      success: 'Success! Your dream has been edited.'
    })
  }


  // RENDER ------------------------
  render() {
    return (

      <tr>
        <td> {this.state.dreamName} </td>
        <td> {this.state.dreamText} </td>
        <td>
          <button onClick={this.edit} className='button'>
            Edit &nbsp; <i className="fas fa-edit"></i>
          </button>
        </td>
        <td>
          <button onClick={this.delete} className="button">
            Delete &nbsp; <i className="fas fa-trash-alt"></i>
          </button>
        </td>
        <Modal show={this.state.show} handleClose={this.hideModal} className="container">

          <form onSubmit={event => this.handleSubmit(event)} className="card is-rounded form-style">
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

            <button className="button is-primary" onClick={this.successMessage}>Submit Changes</button>
            <p> {this.state.success}</p>

          </form>

        </Modal>
      </tr>

    )
  }

}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'
        style={{
          position: 'fixed',
          background: 'white',
          width: '50%',
          height: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)'
        }}
      >
        {children}
      </section>
      <button className="button modal-button is-pulled-right"
        onClick={handleClose} >
        <i className="fas fa-times"></i>&nbsp; Close
        </button>


    </div>
  )

}




