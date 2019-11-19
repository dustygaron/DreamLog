import React from 'react'

export default class Dashboard extends React.Component {

 constructor(props){
   super(props);
   console.log(props.history)
 }
 

  render() {
    return (
      <div>

        <h1>Your Dashboard</h1>
        <p>Access all of your converted files here.</p>

        <section>
          <h2>Text-to-Speech Conversions</h2>
        </section>

        <section>
          <h2>Speech-to-Text Conversions</h2>
        </section>

        <section>
          <h2>Image-to-Text Conversions</h2>
        </section>

      </div>
    )
  }
}