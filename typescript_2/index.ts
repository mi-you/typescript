(() => {
  /*
    类型注解：是一种轻量级的为函数或者变量添加的约束
  */ 
  function say(str:string){
    console.log(str)
  }
  /*
    接口：是一种能力，一种约束
  */ 
  interface IPerson{
    firstName:string
    lastName:string
  }
  function showFullName(person:IPerson){
    console.log(person.firstName + person.lastName)
  }









})()