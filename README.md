# EuphratesHackathon-Zero

Being lightweight, fast, and scalable, Node.js is becoming a widely adopted platform for developing web applications. This project provides an environment to learn how OWASP Top 10 security risks apply to web applications developed using Node.js and how to effectively address them.

## Getting Started

##### Default user accounts

The database comes pre-populated with these user accounts created as part of the seed data -

- Admin Account - u:`admin` p:`Admin_123`
- User Accounts (u:`user1` p:`User1_123`), (u:`user2` p:`User2_123`)
- New users can also be added using the sign-up page.

---

## `.env.example`

```
COOKIE_SECRET=
CRYPTO_KEY=
CRYPTO_ALGO=
HOSTNAME=

MONGODB_URI=

ZAP_HOSTNAME_DEV=
ZAP_PORT_DEV=
ZAP_API_KEY_DEV=

ZAP_HOSTNAME_TEST=
ZAP_PORT_TEST=
ZAP_API_KEY_TEST=
```

---

## How to Set Up Your Copy of EuphratesHackathon-Zero

### OPTION 1 - Run the app on your machine

1. Install [Node.js](http://nodejs.org/) - Requires Node v8 or above

2. Clone the GitHub repository:

   ```bash
   git clone https://github.com/tami-cp0/EuphratesHackathon-Zero.git
   ```

3. Go to the directory:

   ```bash
   cd EuphratesHackathon-Zero
   ```

4. Install node packages:

   ```bash
   npm install
   ```

5. Set up MongoDB. You can either install MongoDB locally or create a remote instance:

   - Using local MongoDB:

     1. Install [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/)
     2. Start [mongod](http://docs.mongodb.org/manual/reference/program/mongod/#bin.mongod)

   - Using remote MongoDB instance:
     1. [Deploy a MongoDB Atlas free tier cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)
     2. [Enable network access](https://docs.atlas.mongodb.com/security/add-ip-address-to-list/)
     3. [Add a database user](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)
     4. Set the `MONGODB_URI` environment variable using the connection string from your cluster:
     ```bash
     mongodb://<username>:<password>@<cluster>/<dbname>?ssl=true&replicaSet=<rsname>&authSource=admin&retryWrites=true&w=majority
     ```

6. Populate MongoDB with seed data:

   ```bash
   npm run db:seed
   ```

7. Start the server:
   - With Node (default port 4000):
     ```bash
     npm start
     ```
   - With Nodemon (auto-restarts app on changes, port 5000):
     ```bash
     npm run dev
     ```

#### Customizing Configuration

You can set `PORT` and `MONGODB_URI` via environment variables.

Other config options can be modified in the [`config/env/all.js`](https://github.com/tami-cp0/EuphratesHackathon-Zero/blob/master/config/env/all.js) file.

---

### OPTION 2 - Run the app with Docker

1. Install [Docker](https://docs.docker.com/installation/) and [Docker Compose](https://docs.docker.com/compose/install/)

2. Clone the GitHub repository:

   ```bash
   git clone https://github.com/tami-cp0/EuphratesHackathon-Zero.git
   ```

3. Go to the directory:

   ```bash
   cd EuphratesHackathon-Zero
   ```

4. Build the images:

   ```bash
   docker-compose build
   ```

5. Run the app (will be available at http://localhost:4000):
   ```bash
   docker-compose up
   ```

---

### OPTION 3 - Deploy to Heroku

1. Set up a MongoDB Atlas cluster and create a database user.

2. Click to deploy:
   [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

3. In the Heroku "Create New App" dialog, add the `MONGODB_URI` config var with the cluster connection string.

---

## Report bugs, Feedback, Comments

- Open a new [issue](https://github.com/tami-cp0/EuphratesHackathon-Zero/issues)
- Join the conversation on [Slack](https://owasp.slack.com/messages/project-nodegoat/) or [Gitter](https://gitter.im/OWASP/NodeGoat)

---

## Contributing

Please follow [the contributing guide](CONTRIBUTING.md)

## Code Of Conduct (CoC)

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## Contributors

Meet our awesome [contributors](https://github.com/tami-cp0/EuphratesHackathon-Zero/graphs/contributors)

## Supports

- Thanks to JetBrains for providing licenses to the amazing [WebStorm IDE](https://www.jetbrains.com/webstorm/)

## License

Code licensed under the [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0)

---

Let me know if you'd like a version with markdown formatting previewed or saved to a file.
