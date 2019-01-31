#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var ora = require('ora')
var projectPath = process.cwd() //当前执行node命令时候的文件夹地址
var bundleFile = require('../config/webpack-config')

var configPath = path.join(projectPath, 'config/html.js')


function init() {
    var spinner = ora('正在打包配置文件...')
    // setTimeout(function () {
    //     spinner.start()
    // },5*1000)
    spinner.start()

    if (!fs.existsSync(configPath)) {
        spinner.stop()
        chalk.red('找不到配置文件.')
    }

    var config = require(configPath)
    const result = bundleFile(config)
    try {
        fs.writeFileSync(path.join(projectPath, config.output), result)
    } catch (e) {
        fs.mkdirSync(path.dirname(config.output))
        fs.writeFileSync(path.join(projectPath, config.output), result)
    }
    spinner.stop()
    console.log(chalk.yellow('已生成对应文件.'))
}

init()





