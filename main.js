// app 模块是为了控制整个应用的生命周期设计的。
// BrowserWindow 类让你有创建一个浏览器窗口的权力。
const path = require("path");
const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const nativeImage = require("electron").nativeImage;
var overlay = nativeImage.createFromPath("icon.png");

const mainWindowURL = "http://218.2.247.130:18856/user/login";

let mainWindow;

function createWindow() {
  Menu.setApplicationMenu(null); // 菜单栏隐藏

  mainWindow = new BrowserWindow({
    maximizable: true, //支持最大化
    show: false, //为了让初始化窗口显示无闪烁，先关闭显示，等待加载完成后再显示。
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    console.log("closed......");
    mainWindow = null;
  });
  // mainWindow.once('ready-to-show', () => {    //开启这个以后点击了图片虽然没有白屏，但是会感觉不到点了没点
  mainWindow.maximize(); //打开时最大化打开，不是全屏，保留状态栏
  // })

  mainWindow.setTitle("旻投电力智能运维管理平台");
  mainWindow.setAutoHideMenuBar(true); //自动隐藏菜单
  mainWindow.loadURL(mainWindowURL);
  // app.commandLine.appendSwitch("--disable-http-cache")   禁用缓存
  // mainWindow.webContents.openDevTools({mode:'bottom'});
  mainWindow.show();
}

app.on("ready", function () {
  console.log("ready......");
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
