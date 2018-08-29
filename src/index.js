import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from './store/index';
import NavigationApp from './config/AppRoutes';
import config from './config/config';
// import Amplify from 'aws-amplify';
// Amplify.configure({
//     Auth: {
//         mandatorySignIn: true,
//         region: config.cognito.REGION,
//         userPoolId: config.cognito.USER_POOL_ID,
//         identityPoolId: config.cognito.IDENTITY_POOL_ID,
//         userPoolWebClientId: config.cognito.APP_CLIENT_ID
//     },
//     Storage: {
//         region: config.s3.REGION,
//         bucket: config.s3.BUCKET,
//         identityPoolId: config.cognito.IDENTITY_POOL_ID
//     },
//     API: {
//         endpoints: [
//             {
//                 name: "notes",
//                 endpoint: config.apiGateway.URL,
//                 region: config.apiGateway.REGION
//             },
//         ]
//     }
// });

export default class Main extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <NavigationApp />
            </Provider>
        )
    }
}