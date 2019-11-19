import React from 'react'

const EditEntry = (props) => {

  return (
    <div className="card is-rounded form-style">

      <h1 className="title">Edit Dream</h1>

      <div className="field">
        <label className="label">Dream Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Enter a dream name" />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <label className="label">Date of Dream</label>
          <p>----Date Picker----</p>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Day of Week</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Time to Bed</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select Time</option>
                  <option>12 am</option>
                  <option>1 am</option>
                  <option>2 am</option>
                  <option>3 am</option>
                  <option>4 am</option>
                  <option>5 am</option>
                  <option>6 am</option>
                  <option>7 am</option>
                  <option>8 am</option>
                  <option>9 am</option>
                  <option>10 am</option>
                  <option>11 am</option>
                  <option>12 pm</option>
                  <option>1 pm</option>
                  <option>2 pm</option>
                  <option>3 pm</option>
                  <option>4 pm</option>
                  <option>5 pm</option>
                  <option>6 pm</option>
                  <option>7 pm</option>
                  <option>8 pm</option>
                  <option>9 pm</option>
                  <option>10 pm</option>
                  <option>11 pm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Time Awake</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select Time</option>
                  <option>12 am</option>
                  <option>1 am</option>
                  <option>2 am</option>
                  <option>3 am</option>
                  <option>4 am</option>
                  <option>5 am</option>
                  <option>6 am</option>
                  <option>7 am</option>
                  <option>8 am</option>
                  <option>9 am</option>
                  <option>10 am</option>
                  <option>11 am</option>
                  <option>12 pm</option>
                  <option>1 pm</option>
                  <option>2 pm</option>
                  <option>3 pm</option>
                  <option>4 pm</option>
                  <option>5 pm</option>
                  <option>6 pm</option>
                  <option>7 pm</option>
                  <option>8 pm</option>
                  <option>9 pm</option>
                  <option>10 pm</option>
                  <option>11 pm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <label className="label">Feeling</label>
          <div className="field is-grouped is-grouped-multiline">
            <p className="control">
<<<<<<< HEAD
              <a className="button smiley">
                {/* <span role="img">😊</span> */}
                😊
              </a>
            </p>
            <p className="control">
              <a className="button smiley">
               {/* <span role="img">😟</span>  */}
               😟
              </a>
            </p>
            <p className="control">
              <a className="button smiley">
                {/* <span role="img">🤔</span> */}
                🤔
=======
              <a href="http://#" className="button smiley">
                <span role="img" alt="happy face" aria-label="smiley face happy">
                  😊
                </span>
              </a>
            </p>
            <p className="control">
              <a href="http://#" className="button smiley">
                <span role="img" alt="sad face" aria-label="sad face happy">
                  😟
                </span>
              </a>
            </p>
            <p className="control">
              <a href="http://#" className="button smiley">
                <span role="img" alt="thoughtful face" aria-label="thoughtful face happy">
                  🤔
                </span>
>>>>>>> d805cb01ff3e629b075463b87a8315d6ce8ec52f
              </a>
            </p>
          </div>
        </div>

      </div>



      <div className="field">
        <label className="label">Dream Log</label>
        <div className="control">
          <textarea className="textarea" placeholder="***** Pull in the dream text from state here to edit****"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>


    </div >
  )

}

export default EditEntry