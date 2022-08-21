// const login = ({ ...user }) => {
//     console.log(user);
//     // setAuth(user);
// };

// login(12, 13, 23);

function* foo(x) {
    while (x < 4) {
        x += yield x;
    }
    return x;
}
var bar = foo(3);
console.log(bar.next());
console.log(bar.next(1));
console.log(bar.next(1));

function* gen() {
    while (true) {
        let value = yield null;
        console.log(value);
    }
}

const g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(8);
// 2
