const obj = {
    a: 1
};

// 不知道代码哪里修改了值的情况下可以使用Proxy
Proxy(obj, {
    set(target, key, value, receiver) {
        debugger;
        return Reflect.set(target, key, value, receiver);
    }
})

setTimeout(() => {
    obj.a = 2;
})