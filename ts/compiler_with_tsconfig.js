
const { exec } = require('child_process');
const path = require('path');

function runCommand(command) {
    // console.log(`runCommand :${command}`)
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            // console.log(`exec command:${command}  error : ${error}  stderr : ${stderr}`)
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

const compliets = `tsc -p ${__dirname}`
const runjs = `node ${path.join(__dirname, 'test_ts.js')}`
const commandQueue = [
    'tsc -v',
    compliets,
    runjs,
];

async function runCommandQueue(commands) {
    for (const command of commands) {
        try {
            const result = await runCommand(command);
            console.log(`Command: ${command} \nexecuted successfully.`);
            if (result) {
                console.log(`Output: \n${result}`);
            }
        } catch (error) {
            console.error(`Error executing command: ${command}. \nError: \n${error.message}`);
        }
    }
}

runCommandQueue(commandQueue);

