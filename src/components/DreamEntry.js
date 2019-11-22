import React from 'react'
import axios from 'axios'

class DreamEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dreamName: '',
      dreamText: ''
    }

    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)

    console.log("THIS IS STATE===>>>" + this.state.dreamName)
  }

  delete = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/delete/${this.props.obj._id}`)
      .then(console.log('Success! Dream was deleted from DB.' + this.props.obj._id))
      .then(window.location.reload(false))
      .catch(err => console.log(err))
  }

  edit = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/edit/${this.props.obj._id}`)
      .then(console.log('Success! Retrieved single dream from DB.' + this.props.obj._id, this.props.obj.dreamName, this.props.obj.dreamText))
      .then(
        this.setState({
          dreamText: this.props.obj.dreamText,
          dreamName: this.props.obj.dreamName
        })
      )
      // .then(window.location.reload(false))
      .catch(err => console.log(err))

  }



  render() {

    return (

      <tr>
        <td> {this.props.obj.dreamName} </td>
        <td> {this.props.obj.dreamText} </td>
        <td><button onClick={this.edit} className='button'>Edit</button></td>
        <td><button onClick={this.delete} className="button">Delete</button></td>
      </tr>

    )
  }

}

export default DreamEntry


