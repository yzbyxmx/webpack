var path = require('path')

module.exports = {
    entry:path.join(__dirname, '../src/txt/test.txt'),
    output: {
        path:path.join(__dirname,"test"),
        filename:'tmp.js'
    },
    plugins:[],
    module:{
        rules:[
            {
                test:/\.txt/,
                use:[
                    '../loader/change-content.js',
                    '../loader/uppercase-loader.js',
                    '../loader/reverse-loader.js',
                ]
            },
        ]
    }
}