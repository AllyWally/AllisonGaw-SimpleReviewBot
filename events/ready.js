const chalk = require('chalk');
const moment = require('moment');
const config = require('../data/config.json')
exports.run = async(client, message) => {
    console.log(chalk.yellow("================================="));
    console.log(chalk.cyan(`    Logged in as ${client.user.tag}!`));
    console.log(chalk.cyan(`    ${config.EmbedData.MadeBy}`));
    console.log(chalk.yellow("================================="));
    console.log(`${chalk.magentaBright(`If you need help go to ${config.EmbedData.GitHubHelp}`)}`)
    
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: `${config.Status['status-message']}`,
            type: 'WATCHING'
        }
    })
}