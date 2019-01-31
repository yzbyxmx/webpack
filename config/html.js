var path = require('path')
module.exports = {
    entry:'./html/example.html',
    output:'./pack/index.js',
    plugins:[],
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[
                    'html-loader',
                    {
                      loader: '../loader/html-template-loader.js',
                      options:{
                          comments: true
                      }
                    },

                ]
            }
        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, '../loaders'), 'node_modules']
    },
}