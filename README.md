## Getting started

### Pre-requisites

* [Node version 16+](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)

### Installation

1. Clone the project: `git clone git@github.com:MrDiggles2/biker-gang-signal.git`
2. Navigate to the `server` directory: `cd server`
3. Install dependencies: `npm install`
4. Start the project: `npm start`

You should now be able to use the example endpoint either by:

* Navigating to http://localhost:3000/healthz in your browser
* Executing `curl http://localhost:3000/healthz` in your terminal

Both should produce output similar to this:

```
{"uptime":60.511793584,"message":"OK","timestamp":"2022-12-10T17:46:11.491Z"}
```