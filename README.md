### Angular project Installation

1. Navigate the folder:
   ```bash
   cd personal-detail
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the server:
   ```bash
   ng serve
   ```
2. The server will be running on http://localhost:4200/.



### Server Installation

1. Navigate the folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the server:
   ```bash
   npm start
   ```
2. The server will be running on http://localhost:3000/.


Inyova Angular test:
1.Project includes features such as:
● Routing, Navigation
● Reactive Forms
● State management (NgRx)

The primary functionality allows users to save personal information of customers, which is then persisted on a server. This ensures that data remains available even after a browser refresh.

Originally, I considered saving data to localStorage or a JSON file within the project. But to better demonstrate real-world application practices, I decided to develop a small Node.js server. This approach allows the project to use HTTP communication, mimicking interactions with a real backend API.



Prepare Two Terminals for running the project:

One for the personal-details front-end Angular application.
Another for the server backend using Node.js.

Installation:
Execute npm install in both the personal-details and server directories to install necessary dependencies.

Launching the Applications:
Launch the Angular application by running ng serve within the personal-details directory.
Start the Node.js server by running npm start or node server.js in the server directory.
