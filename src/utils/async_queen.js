// 异步队列，保证异步任务顺序执行
export class Queens {
  constructor(){
    this.list = [];
    this.len = 0;
    this.status = 0;
  }
  /**
   * @description 队列插入任务
   * @param {function} func 一个返回 Promise 对象的匿名函数
   */
  Append(func){
    this.len++
    this.list.push(func);
    this.Run()
  }
  /**
   * @description 执行队列任务
   */
  async Run(){
    if(this.status === 0 && this.len > 0){
      this.status = 1
      let func = this.list.shift()
      await func()
      this.len--
      this.status = 0
      this.Run()
    }
  }
}