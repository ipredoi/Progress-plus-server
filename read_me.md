# Progress Plus Application

This was made by the combined efforts of **Charlie Chandler**, **Freshta Ebrahim**, **Hajoo Chung**, **Ionut Predoi**, **Ismail Ali** and **Patrick Fleming**.

This is a platform to allow School of Code bootcampers and coaches to track the technical progress of bootcampers.  Coaches can register, submit written feedback, and compare the progress of bootcampers and the bootcamp as a whole.  Bootcampers can register and view their scores and written feedback for the various mastery and recap tasks they complete.

Here is the [deployed version](http://52.214.103.49:3000/), which is hosted in a cluster on AWS's Elastic Container Service. 

You can find the client code [here](https://github.com/ipredoi/progressPlus-client).

## Stack

- `Node JS`
- `Express`
- `Firebase`
- `Docker`
- `Postgres`

## Getting started

1. Clone the repo: `git clone https://github.com/ipredoi/Progress-plus-server.git`

2. Download the required npm modules: `npm i`

3. Copy the contents of .env.local.example into a new file called .env.local

4. Use the same  authentication credentials as in the client code [here](https://github.com/ipredoi/progressPlus-client) from the Firebase console under Project settings > General> Your app. Under Firebase SDK snippet choose Config to get the configuration as JSON. It will include keys like apiKey and authDomain. Set the appropriate environment variables in the .env file at the root of this project.

5. Set up a Postrgres database and set the appropriate environment variables in the .env file at the root of this project (PGHOST,
PGDATABASE,PGUSER,PGPORT,PGPASSWORD). 

## Useful commands

- `npm start` - run the server
