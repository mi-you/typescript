"use strict";
(function () {
    /*
      类型注解：是一种轻量级的为函数或者变量添加的约束
    */
    function say(str) {
        console.log(str);
    }
    function showFullName(person) {
        console.log(person.firstName + person.lastName);
    }
})();
