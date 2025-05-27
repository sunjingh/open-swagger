#!/usr/bin/env node

import path from 'path'

// 解析命令行参数，支持 -c 或 --config 指定配置文件路径
function getConfigPath(): string {
  const argv = process.argv.slice(2)
  const cIndex = argv.findIndex(arg => arg === '-c' || arg === '--config')
  if (cIndex !== -1 && argv[cIndex + 1]) {
    return path.resolve(process.cwd(), argv[cIndex + 1])
  }
  // 默认配置文件
  return path.resolve(process.cwd(), 'swagger.config.ts')
}

// 注意：这里要引用编译后的 main.js
const freeSwagger = require('../src/main.js').default || require('../src/main.js')

const configPath = getConfigPath()
let config: any
try {
  config = require(configPath)
} catch (e) {
  console.error('请提供有效的 swagger 配置文件路径，如：openSwagger -c ./swagger.config.ts')
  process.exit(1)
}

freeSwagger(config).catch((err: any) => {
  console.error('Swagger 生成失败:', err)
  process.exit(1)
})