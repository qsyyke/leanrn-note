# 箭头函数和this

箭头函数是es6的语法，其基本定义如下

```js
const ccc = (参数列表) => {
}
箭头函数就为
  const ccc = (参数列表) => {

  }
```

```
const sum(num1,num2) {
    return num1 + num2;
}
const sum = (num1, num2) => {
    return num1 + num2
  }

// 1.2.放入一个参数
  const power = num => {
    return num * num
  }

  // 2.函数中
  // 2.1.函数代码块中有多行代码时
  const test = () => {
    // 1.打印Hello World
    console.log('Hello World');

    // 2.打印Hello Vuejs
    console.log('Hello Vuejs');
  }

  // 2.2.函数代码块中只有一行代码
  // const mul = (num1, num2) => {
  //   return num1 + num2
  // }
  const mul = (num1, num2) => num1 * num2
  console.log(mul(20, 30));

  // const demo = () => {
  //   console.log('Hello Demo');
  // }
  const demo = () => console.log('Hello Demo')
  console.log(demo());
```





this指向问题

- 问题: 箭头函数中的this是如何查找的了?

    答案: 向外层作用域中, 一层层查找this, 直到有this的定义.

```js
setTimeout(function () {
  console.log(this);
  }, 1000)
//这里的this为window

setTimeout(() => {
    console.log(this);
  }, 1000)
//这个this执行打印为window，因为这个的上一层，什么也没有，但是最终会指定window


```

