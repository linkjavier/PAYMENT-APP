# Payment App with External API Integration

This project is a full-stack application that allows users to view products, make payments using Wompi, and manage stock updates. The application is divided into two main parts: the frontend and the backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Frontend](#frontend)
  - [Available Scripts](#available-scripts)
- [Backend](#backend)
  - [Configuration](#configuration)
  - [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Structure

The project is structured into two main directories:

- `frontend/` - Contains the React application.
- `backend/` - Contains the Nest.js application.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)
- [AWS CLI](https://aws.amazon.com/cli/) configured with your AWS credentials

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/payment-app.git
   cd payment-app
   cd frontend
   npm install
   cd ../backend
   npm install


## Frontend
The frontend is a React application that provides the user interface for the payment process.

### Available Scripts
In the frontend directory, you can run:

npm start: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

npm test: Launches the test runner in interactive watch mode.

npm run build: Builds the app for production to the build folder.

## Backend
The backend is a Nest.js application that provides the API for managing products, transactions, and communication with Wompi and DynamoDB.

### Configuration
Create a .env file in the backend directory with the following content:

env
Copy code
PORT=3001
AWS_REGION=your-aws-region
DYNAMODB_PRODUCTS_TABLE=Products
DYNAMODB_TRANSACTIONS_TABLE=Transactions
WOMPI_API_KEY=your-wompi-api-key
WOMPI_API_URL=https://api-sandbox.wompi.co/v1

### Available Scripts
In the backend directory, you can run:

npm run start: Runs the app in development mode.

npm run build: Builds the app for production.

npm run test: Runs unit tests using Jest.

## Deployment
Frontend
To deploy the frontend application to a cloud provider or static site hosting service, you can use the build output from npm run build.

Backend
To deploy the backend application, consider using AWS services. Ensure you have configured your AWS credentials and necessary services (e.g., DynamoDB) properly.

## Technologies Used
## Frontend:
React
Redux
TypeScript
TailwindCSS

## Backend:
Nest.js
TypeScript
DynamoDB (AWS)

## Testing:
Jest
License
