const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/test")
mongoose.connection.once("open", () => {
  console.log("连接成功")
})
let Schema = mongoose.Schema

// 创建Schema模式对象

let stuSchema = new Schema({
  age: {
    type: Number,
    default: 15,
  },
  name: String,
})
// 创建model
let stuModel = mongoose.model("stus", stuSchema)
// 插入文档
//! 这里变成promise  不是回调函数
// stuModel
//   .create({ age: 22, name: "猪八戒" }, { name: "沙和尚" })
//   .then((data) => {
//     console.log(data)
//   })
// 查看
// const query = stuModel.find({ name: "唐僧" })

const query = stuModel.findById("658902df22beae7b11dd800c")

console.log(query.getFilter())
