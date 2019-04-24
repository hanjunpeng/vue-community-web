/**
 * @Desc 映射 把当前文件夹下为模块
 */
const lodash = require('lodash');
const fs = require('fs');
const path = require('path');

const mapDir = d => {
  const tree = {}
  const [dirs, files] = lodash(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())
  // 映射文件夹
  dirs.forEach(dir => {
    tree[dir] = mapDir(path.join(d, dir))
  })

  // 映射文件
  files.forEach(file => {
    if(path.extname(file) === '.js') {
      tree[path.basename(file, '.js')] = require(path.join(d, file))
    }
  })

  return tree
}


// 默认导出当前文件下的映射
module.exports = mapDir(path.join(__dirname))
