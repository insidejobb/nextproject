import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const index = () => {
    const addMeetupHandler=(enterdeMeetupData)=>{
        console.log(enterdeMeetupData);
    }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default index
