// Main package function
function log() {
  console.log('cli-plugin-foobar');
}

// Make the main function available to other packages that require us
module.exports = log;
