const obj = {
    a: 1
};

Proxy(obj, {
    set(target, key, value, receiver) {
        debugger;
        return Reflect.set(target, key, value, receiver);
    }
})
