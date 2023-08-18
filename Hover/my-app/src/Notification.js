import React from 'react'
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
const Notification = () => {
    function pushNotification(){
        addNotification({
             title: 'success',
            native:true   
        })
    }
  return (
    <div>
        <h1>Notification</h1>
        <button onClick={pushNotification}>Push Notification</button>
    </div>
  )
}

export default Notification
