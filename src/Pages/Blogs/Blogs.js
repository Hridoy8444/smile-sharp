import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div >
            <div className='blogs-container'>
                <h3 className='text-primary'>Difference between authorization and authentication?</h3>
                <h4 className='text-success'>Authentication:</h4>
                <p>Authentication To verify your identity you need to verify your credentials like username / username and password.  The system determines what you say you are using your credentials.  On public and private networks, the system verifies the user's identity through login passwords.  Authentication is usually accomplished by a username and password, and is sometimes combined with authentication factors, which refer to authentication in a variety of ways.</p>
                <h4 className='text-success'>Authorization:</h4>
                <p>Authorization, on the other hand, after your identity is successfully verified by the system, which ultimately allows you full access to resources, such as information, files, databases, funds, locations, almost certain resources.  In simple terms, authentication determines your ability to access the system and the extent to which your identity is verified by the system after successful authentication, you are authorized to access system resources.
                    Authorization is the process of verifying whether the institutional user has access to certain assets.  It verifies your rights to authorize access to your resources such as information, data, files, etc.  Authorization usually comes after authentication to ensure your privileges.  In simple terms, it allows you to do something that allows you to do something or something.
                </p>

            </div>
            <div className='blogs-container'>
                <h3 className='text-primary'>Why are you using firebase?</h3>
                <p>Firebase Analytics gives you undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target. The unique features it offers also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach.With Firebase, you can focus your time and attention on developing the best app(s) possible for your business. Since the operations and internal functions are so solid, and taken care of by the Firebase interface, you can spend more time developing the high quality app that users are going to want to use.One of the most important aspects of app development is being able to grow and engage with users over the course of time. Firebase has a lot of built in features to make sure this is exactly what you do. With the platform being geared towards business apps, this is really at the center of what makes Firebase so great.
                </p>
                <h3 className='text-primary'>What other options do you have to implement authentication?</h3>
                <h4 className='text-success'>Amazon Cognito</h4>
                <p>You can easily get started by visiting the AWS Console. If you do not have an Amazon Web Services account, you can create an account when you sign in to the console. Once you have created a user pool for user management or an identity pool for federated identities or sync operations, you can download and integrate the AWS Mobile SDK with your app. Alternatively you can call the Cognito server-side APIs directly, instead of using the SDK. See our developer guide for more information.</p>
            </div>
            <div className='blogs-container'>
                <h3 className='text-primary'>What other services does firebase provide other than authentication?</h3>
                <h4 className='text-success'>There are many services which Firebase provides, Most useful of them are:</h4>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;