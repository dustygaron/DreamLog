import React from 'react'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.history)
  }


  render() {
    return (
      <div>
        <div className="has-text-centered">
          <h1 className='title'>Your Dashboard</h1>
          <p>Access all of your converted files here.</p>
        </div>

        <section>
          {/* <DreamEntry /> */}
        </section>

      </div>
    )
  }
}