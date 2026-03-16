# object-store
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple object store API using Deno.

## Features
- Stores JSON objects in separate files for each "object"
- Provides a GET and SET API for accessing and modifying the stored objects
- Includes access logging and rate limiting to protect against abuse
- Supports blacklisting and whitelisting of clients

## Requirements
This project requires [Deno](https://deno.land/) to run.

## Usage
1. Clone the repository: `git clone https://github.com/code4fukui/object-store.git`
2. Change to the project directory: `cd object-store`
3. Start the server: `deno run --allow-net --allow-read --allow-write objectstore.js`

The server will start listening on `http://localhost:8000/api/`.

## Data / API
The project uses the local file system to store the JSON objects. The API endpoints are:

- `GET /api/get/{filename}/{objectname}`: Retrieve a stored object by filename and name
- `POST /api/set/{filename}/{objectname}`: Store a new or update an existing object

## License
This project is licensed under the [MIT License](LICENSE).
