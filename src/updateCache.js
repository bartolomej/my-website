const github = require('./github');
const fs = require('fs');
const path = require('path');

async function cache () {
  const user = await github.getUserInfo('bartolomej');
  const repos = await github.getRepoInfo('bartolomej');
  const data = { ...user, ...repos };
  fs.writeFile(path.join(__dirname, 'content', 'github.json'), JSON.stringify(data), 'utf-8', err => {
    console.log(err)
  });
}

cache();
