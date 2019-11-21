import React from 'react'

const DreamEntry = (props) => {

  return (
    <tr className='flex'>
      <td style={{ width: '100%' }}> {props.obj.dreamText} </td>
      <td><button className='button'>Edit</button></td>
      <td><button className='button'>Delete</button></td>

    </tr>
  )
}

export default DreamEntry


