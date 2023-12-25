const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/test")

mongoose.connection.once("open", () => {
  console.log("数据库连接成功~~~")
})
mongoose.connection.once("close", () => {
  console.log("数据库连接已断开！！！")
})
// 断开数据库连接
// mongoose.disconnect()
