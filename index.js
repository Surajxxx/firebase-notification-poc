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
        project_id: "optushomes",
        private_key_id: "65e34c3bb6c93784ce3b3506a117bdd14f974111",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDTvr9NtJCymwzT\n4QOmnUE8mMtAe4voqLcNxXNddTSzYJcs1Yghta6AzTkRm3JrFijcBxl1XsTgMxw/\ncE8/c5RshjN4xXUxx4UOTi7Ui+0yq9J+LyvtSsoQ0BQoFOEf9UgkLg/QK6hlUyRE\nF4goYBtoxLomUjwCfIGKWXrGyS7RP9uNQGC+R0vZrtJb15N0Amkh+tn0/Xjb+wdQ\nFSll2TPvp3/6PLSrF1zouXgJUTOBQsMVq7jMSXZ2gmTFF0ha3PweYrNjzsdQN21E\nhlVbwdrYBIa8vv0cVGeFmYM/KZWriSYvvsoOPHAFqTxte/R0/2k9upo/AJ2q62DN\nqkomppchAgMBAAECgf9VZ9jKDLkT9XJwdRJ2BA6Z+zT2U/bgC69kevfYw2SDwr6S\n7mmB/vRpKYkHS5tmXUpgJ8LzWJQdhY55MRQrQdWWjUlzHyghxeclqXVkXH2OEDAZ\ntoZyJWIKbAnSQEeUsql6XXMydzRg7b5gQkHMnPvzoU2wWMIu/Vegz+bkIbj4pr4t\nKLCwcJwr0S0KL13BZmGYDRrz/vYKXLrhL/STsEMv11jf/qLf+t7TosDqhfM33url\nAPMyePfDJWdDK0FFwGQellkwWIpoQgyyDwVliHGpx9TWrsdLWiemi4/f82bmLOdR\nNwIN4a7nj/O+njgq5gWlzfSTezqb32+Wj5UgrdkCgYEA63CCyPlWQcec5xhxr1Y1\nKBlzSarT/WyuhDtrWAPrVcM6513JDYSHIpwPhUxoKa9AU2ZOR1u1XnkeASTVNypz\n7OjAUU8G1VkJbcPa2enIUKm6cMeQt6DPBJyDaM65MFxAjcMe5Sv2ILBMrEgikgZs\nVSGwOrP4zYWRiVui4roOOAkCgYEA5jyGNe3LsAKdcKlQ4ANR/lY566wOySGDDTC8\nimbyMI4P/vhIospPKLRwGE0LMNrDP0LBAR5G7udLIKNq5AwNq47q3qU38rfMGUOT\n9Z+97hqfqBiFlEvi/6biaZlwDfj3lcgyld5zDKMxtP0miD1pGTjz3mpO3ggbnWiZ\ndJS7PFkCgYAHBfUwz5dOIQlCL418oIK3boLs6KaoQay3Dxq1pnBHv6orKrYLrC9n\nzeX8oPnefHbbxgqBwG+ZoN1PRW0C10ZcA9lw032tsZlBZ/1IUNwD4/xGzv03LRnf\n1ldpMfl+QtI+KFrslTIjaX7wCLrXRk/G/llGdwXuA5UC1vP19XzlGQKBgE6efknu\nEK7ixbZR6u8D0zzhXtfuIgJmciTP7qHoM22HJUkwqUUFhnBk5R43OMoO+bshZVyn\nZRtxWcMkanzC7OwXWnZ6vpcgUg6Sd/TY/ndPGhPBg+O24iXga9IZdh0fVhQMj9GD\na4/2LiQaiczeA4R8YTIi5RmGdT+UF0qq+yDJAoGBAJsL3JskLjJrsL8tXkq6fwcG\nIEImpAEcbkBgT2wBWPMng/Jn5ihCeeuWeWh8qgEsQ26sYyh1UI5q80BIMXa+J/QN\nXtZXcVS6tACXBlksIkv7MYRALynV18ZZw4ygxc0w/uMevipBBorCGRSXnvEfHs3x\nKPWrcEF5wMRyl+zpknVe\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-ro4mk@optushomes.iam.gserviceaccount.com",
        client_id: "102767870011152538670",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ro4mk%40optushomes.iam.gserviceaccount.com"
      })
})

const app = express();

app.use(express.json());

// android device
// const firebaseToken = 'cBpu7WTKQdG4Gzit5OIAvl:APA91bGkf8RUgxALzc-4arMabMF9LxveivB3lOmguRZOYjV8bZWi9yzPvK11tOjn5CPTNeYqmiNOe-hbXbAG6i6jvJOYG7tvwe-4IJNeEam70PGijGnmMtIQA2VOcKLYA0VRBhPJMgrn';

// ios device
const firebaseToken = 'fnI6WS3H1Uzgn2_64Ba1RG:APA91bEtJHhXwWRroRUk8X-bc3KbwFWiSXvrUwBBN1Rg6arxLCleTy32gP9ieAd4mLQi7zVuvEo2ASdBv-1i1D_bZzayM6aDk-ExSZSMwzFN-Irjc11-f-_7D5s5f82uVtGopftFKVgE';

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