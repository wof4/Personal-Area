const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

const installAll = async () => {
    const client = path.resolve('client')
    const server = path.resolve('server')
    

    try {
        console.log("Установка зависимостей общих файлов подождите...")
        await execFile(npm, ["install"]);
        console.log("Успешно выполненно")

        console.log("Установка зависимостей для SERVER подождите...")
        await execFile(npm, ["install"], { cwd: server });
        console.log("Успешно выполненно")

        console.log("Установка зависимостей для CLIENT подождите...")
        await execFile(npm, ["install"], { cwd: client });
        console.log("Успешно выполненно")

        console.log("Выполните команду 'npm run start' для запуска приложения")

    } catch (err) {
        console.log(`выполнение операции завершилось ошибкой ${err}`)

    }
};

installAll()