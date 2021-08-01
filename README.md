# Orders Challenge
Orders Challenge made with Node.js and React



# Entity Relationship Diagram

The following diagram takes in consideration Orders with details, Role based authorization and Event table to manage all events that occurs in the system, a little approach to Event Sourcing.

![ERDDiagram1](https://user-images.githubusercontent.com/53315757/127786027-2441121d-0fc3-478c-9b21-3430071b03fb.jpg)


In this repository you will find an archive called ddl.sql. You can use it to generate the basic structure. 

# Node.js Server 

In server folder you will find node.js files to serve request related with orders. You will notice that has a Clean Code approach trying to separate functionality in order to keep it ordered and clean in the future. There are features to add to this project.

- MySQL Integration in the repository
- Authentication with JWT
- Authorization with JWT
- Domain Events to save every action that occurs in the system and save them in Event table (You can push them in a Queue or Stream Solution)

Current version of the server is not running :(

# React Client

In orders-react you will find all stuff related with Front End using React 17. I decided to use Antd as UI-Framework to develop faster that pure CSS or styled components. I simplified the front end with a single view displaying all orders in a table with order details attached to it.

![Front End](https://user-images.githubusercontent.com/53315757/127786004-ba988607-2207-47d7-94f3-dbfe93f45b64.PNG)


You can use `npm start` to execute the project. There is fake data in the components. It's pending to make the integration with the server. I chose axios as Http Client to make requests.
