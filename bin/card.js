#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
'use strict'

// Pull in our modules
import chalk from 'chalk'
import boxen from 'boxen'

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Jessica Martinez'),
  handle: chalk.white('@Jessaleem'),
  shorthandle: chalk.white('Jessaleem'),
  work: chalk.white('FullStack developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('Jessaleem'),
  github: chalk.gray('https://github.com/') + chalk.green('Jessaleem/'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('jessaleem/'),
  npx: chalk.red('npx') + ' ' + chalk.white('jessaleem'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  // labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

console.log(chalk.green(boxen(output, options)))
