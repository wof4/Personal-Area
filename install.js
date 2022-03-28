const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

const installAll = async () => {
    const client = path.resolve('client')
    const server = path.resolve('server')
    const green = "\x1b[32m"
    const FgMagenta = "\x1b[35m"
    const blue = '\x1b[36m%s\x1b[0m'


    try {
        console.log(blue, 'Установка зависимостей общих файлов подождите...')
        const { stdout: mainProcess } = await execFile(npm, ["install"]);
        console.log(FgMagenta, mainProcess)
        console.log(green, "Успешно выполненно")

        console.log(blue, 'Установка зависимостей для SERVER подождите...')
        const { stdout: serverProcess } = await execFile(npm, ["install"], { cwd: server });
        console.log(FgMagenta, serverProcess)

        console.log(green, "Успешно выполненно")

        console.log(blue, 'Установка зависимостей для CLIENT подождите...')
        const { stdout: clientProcess } = await execFile(npm, ["install"], { cwd: client });
        console.log(FgMagenta, clientProcess)
        console.log(green, "Успешно выполненно")



        console.log(blue,"Выполните команду 'npm run start' для запуска приложения")

    } catch (err) {
        console.log(`выполнение операции завершилось ошибкой ${err}`)

    }
};

installAll()