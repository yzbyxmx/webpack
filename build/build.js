#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var ora = require('ora')
var projectPath = process.cwd() //当前执行node命令时候的文件夹地址
console.log(1234,projectPath)
var bundleFile = require('../config/webpack-config')

var configPath = path.join(projectPath, 'config/loader.js')


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
       //fs.writeFileSync(path.join(config.output.path, config.output.filename), result)
    } catch (e) {
        if(!fs.existsSync(config.output.path)){
            fs.mkdirSync(config.output.path)
        }
        fs.writeFileSync(path.join(config.output.path, config.output.filename), result)
    }

    spinner.stop()
    console.log(chalk.yellow('已生成对应文件.'))
}

init()





