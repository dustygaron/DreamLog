import React from 'react'
import axios from 'axios'

class DreamEntry extends React.Component {

  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }

  delete = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/delete/${this.props.obj._id}`)
      .then(console.log('Success! Dream was deleted from DB.' + this.props.obj._id))
      .then(window.location.reload(false))
      .catch(err => console.log(err))
  }

  render() {
    return (

      <tr>
        <td> {this.props.obj.dreamName} </td>
        <td> {this.props.obj.dreamText} </td>
        <td><button className='button'>Edit</button></td>
        <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
      </tr>

    )
  }

}

export default DreamEntry


