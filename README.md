# Electron

### 内容

以 electron 为架构完成的首个桌面应用

### 注意事项

在国内 dist 的时候一直会去墙外下载一个仓库注意

推荐使用方法：[electron 设置淘宝镜像](https://mp.weixin.qq.com/s/0ihFq7khKWiPB_vAwkgUTA)
**欢迎大家点开链接查看，为了防止链接失效，我把重要的文字摘取下来**
配置淘宝镜像

```js
cd ~
# npm 配置文件
vi .npmrc
# 添加
electron_mirror=https://npm.taobao.org/mirrors/electron/
# 添加后、保存退出即可
electron-custom-dir=7.0.0
```

**_重点： WARN::::: 注意 dir 后面的版本号，安装什么版本用什么版本号或者 npm i electron@7.0.0 -D_**

### package 里面的配置参数

- scripts 标签内的启动项
- build 下的打包参数注意看。
