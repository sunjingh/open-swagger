#!/usr/bin/env node

import path from 'path'
import fs from 'fs'

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

// 自动注册 tsx 或 ts-node，如果是 .ts 配置文件
function registerTsRuntime(configPath: string) {
  if (configPath.endsWith('.ts')) {
    try {
      require('tsx').register()
    } catch {
      try {
        require('ts-node').register({
          transpileOnly: true,
          compilerOptions: {
            module: 'commonjs'
          }
        })
      } catch (e) {
        console.error('请安装 tsx 或 ts-node 以支持 .ts 配置文件')
        process.exit(1)
      }
    }
  }
}

// 加载配置
function loadConfig(configPath: string): any {
  registerTsRuntime(configPath)

  if (!fs.existsSync(configPath)) {
    console.error(`配置文件不存在: ${configPath}`)
    process.exit(1)
  }

  try {
    return require(configPath)
  } catch (e) {
    console.error(`配置文件加载失败: ${configPath}`)
    console.error(e)
    process.exit(1)
  }
}

// === 主流程 ===
const configPath = getConfigPath()
const config = loadConfig(configPath)

// 引入主逻辑（这里是编译后的 main.js）
const freeSwagger = require('../src/main.js').default || require('../src/main.js')

freeSwagger(config).catch((err: any) => {
  console.error('Swagger 生成失败:', err)
  process.exit(1)
})
