#Swear Jar 2.0
Our hack at #BattleHack Chicago 2015.

Our app is the classic SwearJar with a twist. It allows you to challenge your friends and help them reduce swearing and at the same time donate the money collected in the jar to charity. 

Our app is integrated with
- [JustGiving](https://api.justgiving.com/docs) to help the users find and select charities.
- [Vemo](https://developer.venmo.com/) to make the donations.

Technologies used 
- Ionic (HTML5 and AngularJS) framework for the frontend
- Firebase to power the app's backend, including data storage and user authentication.

#App Workflow

To start off, users can sign up and login to to start challenging their friends. This is done by creating quests which mainly requires 4 things - friend who is challenged, minimum amount of contribution, penalty per swear and duration of the quest. Options to add other friends to monitor is also provided. Once the quest is created it will appear on the home tab. Each time one catches their friend swearing all one needs to do is tap the 'Swear Tap' to log them to the quest!

![](https://raw.githubusercontent.com/moontails/SwearJar2.0/master/screenshots/login.png) 

Once the quest duration is completed, the app will help donate the amount raised to charity. Users can search for a charity and make their donations. Thus raising money for a good cause!

![](https://raw.githubusercontent.com/moontails/SwearJar2.0/master/screenshots/select-charity.png) 
