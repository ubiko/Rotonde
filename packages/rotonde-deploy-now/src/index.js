import path from 'path';
import { spawn } from 'child_process';
import fs from 'fs-extra';

const directory = path.join(__dirname, '../dist');
fs.mkdirs(directory, err => {
  if (err) {
    throw err;
  }
  const packageJsonPath = path.join(directory, 'package.json');
  const packageJson = {
    name: 'rotonde',
    scripts: {
      start: 'node index.js'
    },
    dependencies: {
      'rotonde-core': '*'
    }
  };
  fs.writeFile(path.join(directory, 'index.js'), `require('rotonde-core/lib/index');`, err => {
    if (err) {
      throw err;
    }
    fs.writeJson(packageJsonPath, packageJson, err => {
      if (err) {
        throw err;
      }
      const now = spawn('now', [
        directory
      ], {
        stdio: 'inherit'
      });
      now.on('close', code => {
        console.log('done', code);
      });
    });
  });
});
