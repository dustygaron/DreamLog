import React from 'react'
import DreamEntry from '../components/DreamEntry'
import axios from 'axios'


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    // console.log(props.history)

    this.state = {
      dreamLogFromDb: [],
    }
    // console.log('dreamLogFromDb===>>>' + this.state.dreamRoute);
    this.listDreamEntry = this.listDreamEntry.bind(this)
  }

  componentDidMount() {
    // console.log(`${process.env.REACT_APP_API_URL}/dreamRoute`)
    axios.get(`${process.env.REACT_APP_API_URL}/returnDream`)
      .then(res => {
        console.log('Success getting dreams from db===>>>', res)
        this.setState({
          dreamLogFromDb: res.data
        }, () => {
          // console.log(this.state, '=-=-=-=-=-=-')
        })
      })
      .catch(err => {
        console.log('Error retrieving dreams from db===>>>', err, this.res)
      })
  }

  listDreamEntry = () => {
    // console.log('Showing the dreams ===>>>')
    if (this.state.dreamLogFromDb.length)
      return this.state.dreamLogFromDb.map((data, i) => {
        return (
          <DreamEntry obj={data} key={i} />
        )
      })
  }




  render(props) {
    return (

      <div>

        <div className="container">
          <div className="spacer has-text-centered">
            <h1 className='title'>Your Dashboard</h1>
            <h2>Review your dream log.</h2>

          </div>
          <table className=" card table is-striped is-hoverable is-fullwidth">
            <thead className="table-header">
              <tr className="table-header">
                <td className="td-dream-name">Dream Name</td>
                <td className="td-dream-text">Dream Text</td>
                <td className="td-crud-buttons"></td>
                <td className="td-crud-buttons"></td>
              </tr>
            </thead>
            <tbody>
              {this.listDreamEntry()}
            </tbody>
          </table>

        </div>


      </div>
    )
  }
}