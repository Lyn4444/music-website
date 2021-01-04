/*
 * @Author: Ljh
 * @Date: 2020-06-19 21:30:02
 * @LastEditTime: 2020-06-20 00:46:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \music\vue.config.js
 */ 
module.exports = {
  devServer: {
    proxy: {
        '/api': {
            target: 'http://localhost:4000',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
            }
        }
    }
},
    configureWebpack: {
        resolve:{
            alias:{
                'assets': '@/assets',
                'components': '@/components'
            }
        }
    }
}