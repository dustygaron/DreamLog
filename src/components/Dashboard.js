import React from 'react'
import DreamEntry from '../components/DreamEntry'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.history)
  }


  render() {
    return (
      <div>

        <div className='container'>
          <div className="spacer has-text-centered">
            <h1 className='title'>Your Dashboard</h1>
            <h2>Review your dream log.</h2>
          </div>
        </div>

        <section className="container">

          <table className="table">
            <thead>
              <tr>
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
              mood="☺"
              toSleep="10:30 pm"
              wakeUp="7:30 am"
            />

            <DreamEntry
              name="Rainy Saturday"
              date="November 23, 2019"
              day="Monday"
              mood="☺"
              toSleep="10:00 pm"
              wakeUp="9:15 am"
            />

          </table>


        </section>

      </div>
    )
  }
}