# npm-profile-card
My npm card 😎

Steps

1. You can fork in the repo of Jessaleem or just go creating your files.

```
# Create new folder
$ mkdir npm-profile-card && cd $_

# Init the npm package
$ npm init 
```

2. Install the dependencies

```
# dependencies
$ npm install
```

3. Create the personal card

```
# Create bin folder
$ mkdir bin && cd $_

# Create the card.js file
$ touch bin/card.js
```

4. Add personal information to your card

```
#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('YOUR NAME / '),
  handle: chalk.cyan('HANDLENAME'),
  work: chalk.white('WHERE DO YOU WORK'),
  twitter: chalk.cyan('TWITTER ACCOUNT'),
  github: chalk.cyan('GITHUB ACCOUNT'),
  linkedin: chalk.cyan('LINKEDIN ACCOUNT'),
  web: chalk.cyan('YOUR WEBSITE'),
  npx: chalk.white('npx YOUR_ALIAS'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
```

5. Create an account in npm.org, if you already have it, skip this step

6. Know the version of your package dependency

```
$ npm version major
```

7. Add your npm user - login

```
$ npm adduser
```

8. Publish your package

```
$ npm publish
```

9. Run your npm-package card

```
$ npx makeitrealcamp
```







