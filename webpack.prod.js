const {merge}=require ('webpack-merge');
const config=require ('./webpack.config.js')
module.experts=merge(config,{
    mode:'production'
})