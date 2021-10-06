// 获取返回值的类型
function testFn() {
    return 'aaaa';
}
// 需要查查文档
// const obj = {
//     doSth() {
//         return this.name
//     }
// }
var obj3 = {
    doSth: function () {
        return this.name;
    }
};
