require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

// Copy files to release dir
mkdir('-p', 'out/Release');
cp('-R', 'stuff/*', 'out/Release');

// Replace macros in each .js file
cd('lib');
/*
ls('*.js').forEach(function(file) {
  sed('-i', 'v0.1.2', 'v0.1.2', file);
  sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
  sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
});
cd('..');
*/
// Run external tool synchronously
/*if (exec('git init').code !== 0) {
  echo('Error: Git init failed');
  exit(1);
}*/
// Run external tool synchronously
if (exec('git add .').code !== 0) {
  echo('Error: Git add failed');
  exit(1);
}
console.log("committing...");
if (exec('git commit -m "Auto-commit"').code !== 0) {
  echo('Error: Git commit failed');
  exit(1);
}
 

     
//git config --global credential.helper cache
 
if (exec('git push github master').code !== 0) {
  echo('Error: Git commit failed');
  exit(1);
}