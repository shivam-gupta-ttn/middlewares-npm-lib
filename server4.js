const { execFile } = require('child_process');

execFile('./script.sh', (error, stdout, stderr) => {
    if (error) {
        console.log(`error : ${error.message}`);
        return
    }
    if (stderr) {
        console.log(`stderr : ${stderr.message}`);
        return
    }
    console.log(`stdout : ${stdout}`)
})