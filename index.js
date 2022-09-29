const express = require( 'express');
const firebase = require( 'firebase-admin');

// Firebase secret file path
// const serviceAccount = require('./testing-app-612fd-firebase-adminsdk-dyhxu-bfbbfa8299.json')

// initialize firebase app by passing credentials json file path as argument
// firebase.initializeApp({
//     credential : firebase.credential.cert('./testing-app-612fd-firebase-adminsdk-dyhxu-bfbbfa8299.json')
// })

// initialize firebase app by passing credentials object as argument
firebase.initializeApp({
    credential : firebase.credential.cert({
        type: "service_account",
        project_id: "***********",
        private_key_id: "************************",
        private_key: "***************"
        client_email: "**************",
        client_id: "****************",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "********************"
      })
})

const app = express();

app.use(express.json());

// android device
// const firebaseToken = "****************"

// ios device
const firebaseToken = "********************"

const payload = {
    notification: {
        title: 'Testing',
        body: 'This is an example notification for ios device',
      }
}

const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day
  };

firebase.messaging().sendToDevice(firebaseToken, payload, options) .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });


const port = 4545

app.listen(port, () => {
    console.log('listening on port ' + port);
})
