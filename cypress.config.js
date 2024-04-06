const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
  },
})

  


//const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
})


// cypress/plugins/index.js

module.exports = (on, config) => {
  on('task', {
    // Custom task to execute tests
    executeTests: (dateTime) => {
      // Check if current time matches scheduled time
      const scheduledTime = new Date(dateTime);
      const currentTime = new Date();
      if (currentTime.getTime() === scheduledTime.getTime()) {
        // Execute tests
        // For simplicity, assume tests are run using a command line tool
        const exec = require('child_process').exec;
        return new Promise((resolve, reject) => {
          exec('npm run cypress:run', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return reject(error);
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            resolve(stdout);
          });
        });
      } else {
        // Return a message indicating tests are not scheduled for execution
        return 'Tests are not scheduled for execution at this time.';
      }
    }
  });
};


