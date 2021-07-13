const path = require('path')

const resolve = p => {
  const pa = path.resolve(__dirname, '../', p)
  console.log(pa)
  return pa
}

module.exports = {
  //c:\Users\flex_gap\Desktop\origin\vue\src\platforms\web\entry-runtime-with-compiler
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\compiler
  compiler: resolve('src/compiler'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\core
  core: resolve('src/core'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\shared 
  shared: resolve('src/shared'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\platforms\web 
  web: resolve('src/platforms/web'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\platforms\weex
  weex: resolve('src/platforms/weex'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\server
  server: resolve('src/server'),
  //c:\Users\flex_gap\Desktop\origin\vue\src\sfc
  sfc: resolve('src/sfc')
}
