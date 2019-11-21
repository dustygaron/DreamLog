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
    console.log('Showing the dreams ===>>>')
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
            <h2> Welcome to your dashboard, __
              {/* {props.FullName} */}
              !
            </h2>
          </div>
          <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <td>Dream</td>
                <td>Date</td>
                <td>Day of Week</td>
              </tr>
            </thead>
            <tbody>
              {this.listDreamEntry()}
            </tbody>
          </table>
        </div>


        {/* <div className='container'>
          
        </div>

        <section className="container">

          <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr className="table-header">
                <th>Dream Name</th>
                <th><abbr title="Position">Date</abbr></th>
                <th>Day of Week</th>
                <th><abbr title="Position">Feeling</abbr></th>
                <th>Time to Bed</th>
                <th>Time Awake </th>
              </tr>
            </thead>

            <DreamEntry
              name="Wicked Dreams"
              date="November 18, 2019"
              day="Monday"
              mood="🤔"
              toSleep="10:30 pm"
              wakeUp="7:30 am"
            />

            <DreamEntry
              name="Rainy Saturday"
              date="November 23, 2019"
              day="Monday"
              mood="😊"
              toSleep="10:00 pm"
              wakeUp="9:15 am"
            />

          </table>


        </section> */}

      </div>
    )
  }
}