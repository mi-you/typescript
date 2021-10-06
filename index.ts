interface PersonType {
    name: string;
    age: number;
    sex: string;
}

const miyou: PersonType = {
    name: 'miyou',
    age: 18,
    sex: 'G'
}

// // 获取类型
// type P = typeof miyou; // P = PersonType

// 获取指定类型的特定属性，组成新类型
type PName = Pick<PersonType, 'name' | 'age'>

// 排除一些属性
type test1 = Exclude<'a' | 'b' | 'c' | 'd' | 'e', 'a' | 'b'>
type PEName = Exclude<keyof PersonType, keyof PName>

// 一个综合的使用
interface test2 extends Pick<PersonType, Exclude<keyof PersonType, 'name'>> {
    name: number;
}

// 获取返回值的类型
function testFn() {
    return 'aaaa'
}
type tFn = ReturnType<typeof testFn>

// doSth会返回字符串
const obj3: ThisType<PersonType> = {
    doSth() {
        return this.name
    }
}

// 过滤类型中的null和undefined
type test3 = NonNullable<'123' | null | undefined>

// 字符串模板类型
type EventName<T extends string> = `${T}Changed`
type test4 = EventName<'foo'> // test4 = fooChanged
type test5 = EventName<'foo' | 'baz'> // test4 = fooChanged | bazChanged