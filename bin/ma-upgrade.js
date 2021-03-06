/**
 * @file 升级swan 或 cli
 * @author yufeng04
 */

const exec = require('child_process').exec;
const ora = require('ora');
const consoleLog = require('../lib/log');

/**
 * 升级swan
 */
function upgradeSwan() {
    let cmd = 'npm install mapp-cli --save';
    consoleLog('升级中，可能需要几分钟, 请耐心等待...', 'info', true);
    consoleLog('执行命令: ' + cmd, 'info', true);
    const spinner = ora('正在升级...\n');
    spinner.start();
    let fcmd = exec(cmd, () => {
        spinner.stop();
        consoleLog('完成安装最新版本ma', 'success', true);
    });
    fcmd.stdout.on('data', (d) => {
        consoleLog(d.substring(d, d.length - 1));
    });
}

/**
 * 升级cli
 */
function upgradeCli() {
    let cmd = 'npm install swan-x-cli --save';
    consoleLog('升级中，可能需要几分钟, 请耐心等待...', 'info', true);
    consoleLog('执行命令: ' + cmd, 'info', true);
    consoleLog('完成安装最新版本cli', 'success', true);
}

exports = module.exports = program => {
    if (program.ma) {
        upgradeSwan();
        return;
    }
    if (program.cli) {
        upgradeCli();
        return;
    }
    program.help();
};