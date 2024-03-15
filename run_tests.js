
//  require: ('./test.js')
 
const { spawn } = require('child_process');

const cucumberProcess = spawn('node', ['node_modules/.bin/cucumber-js', '--format=json:report.json', 'features/'], { stdio: 'inherit' });

cucumberProcess.on('exit', (code) => {
  if (code === 0) {
    const testProcess = spawn('node', ['test.js'], { stdio: 'inherit' });

    testProcess.on('exit', (testCode) => {
      if (testCode !== 0) {
        console.error('Tests failed with exit code:', testCode);
      }
    });
  } else {
    console.error('Cucumber tests failed with exit code:', code);
  }
});



