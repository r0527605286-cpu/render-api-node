# Render API Manager

A Node.js proxy server designed to interact with the Render API to fetch and display active services.

## Project Overview

This server acts as an intermediary that connects to a specific Render account, retrieves the list of active services, and serves them to the browser in JSON format. It simplifies the process of monitoring service status through a centralized endpoint.

## Features

*   Secure communication with Render API using Axios.
*   Express.js server architecture.
*   Environment variable support for sensitive API keys.
*   CORS-ready for integration with frontend applications.

## Prerequisites

*   Node.js installed on your machine.
*   A valid Render API Key.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:
   ```bash
   npm install
