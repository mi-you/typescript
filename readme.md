## typescript_1参考[B站视频学习](https://www.bilibili.com/video/BV1Xy4y1v7S2?from=search&seid=10216527013763368067)

## typescript_2参考[B站视频学习](https://www.bilibili.com/video/BV1ra4y1H7ih?from=search&seid=5518587045148570654)

## 预备
```
// 安装
npm install -g typescript
// 检测
tsc -V
```
## 编译ts
```
tsc 文件名
```
## ts 在 vscode 中自动编译
1. ` tsc --init`: 创建一个json文件
2. 在 `tsconfig.json` 同级创建 `index.ts`
3. 点击`终端 -> 运行任务 -> 显示所有任务 -> tsc:监视-tsconfig.json`