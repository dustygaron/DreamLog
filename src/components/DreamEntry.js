import React from 'react'
import axios from 'axios'
import EditEntry from '../components/EditEntry'

class DreamEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dreamName: this.props.obj.dreamName,
      dreamText: this.props.obj.dreamText,
      show: false
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
      .then(console.log('Success! Retrieved single dream from DB.' + this.props.obj._id, this.props.obj.dreamName, this.props.obj.dreamText))
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

  render() {
    return (

      <tr>
        <td> {this.state.dreamName} </td>
        <td> {this.state.dreamText} </td>
        <td><button onClick={this.edit} className='button'>Edit</button></td>
        <td><button onClick={this.delete} className="button">Delete</button></td>
        <Modal show={this.state.show} handleClose={this.hideModal} className="container">
          <EditEntry dreamName={this.state.dreamName} dreamText={this.state.dreamText} id={this.props.obj._id} />
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

      <button className="button  modal-button"
        onClick={handleClose} >
        <i className="fas fa-times"></i>
      </button>

    </div>
  )
}

export default DreamEntry


