import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import { Record } from 'immutable';


// // 1. 객체는  Map
// const obj = Map({
//     foo: 1,
//     input: Map({
//         bar: 10
//     })
// });

// console.log(obj.toJS());

// // 2. 배열은 List
// const arr = List([
//     Map({ foo: 1}),
//     Map({ bar: 2}),
// ]);

// console.log(arr.toJS());

// // 3. 설정할 땐 set
// let nextObj = obj.set('foo',5);
// console.log(nextObj.toJS());
// console.log(nextObj !== obj);

// // 4. 값을 읽을땐 get
// console.log(obj.get('foo'));
// console.log(arr.get(0));

// // 5. 읽은다음에 설정 할 때는  update
// // 두번 째 파라미터는 updater 함수가 들어감
// nextObj = nextObj.update('foo', value => value + 1);
// console.log(nextObj.toJS());

// // 6. 내부에 있는걸 ~할땐 In 을 붙인다.
// nextObj = obj.setIn(['inner', 'bar'], 20);
// console.log(nextObj.getIn(['inner','ber']));

// let nextArr = arr.setIn([0, 'foo'], 10);
// console.log(nextArr.getIn([0,'foo']));

// // 7. List 내장함수는 배열이랑 비슷하다.
// nextArr = arr.push(Map({ qaz: 3}));
// console.log(nextArr.toJS());
// nextArr = arr.filter(item => item.get('foo') === 1);
// console.log(nextArr.toJS());

// // 8. delete 로 key 를 지울 수 있음.
// nextObj = nextObj.delete('foo');
// console.log(nextObj.toJS());

// console.log(nextArr);
// nextArr = nextArr.delete(0);
// console.log(nextArr.toJS());

//-------------------- Record 예시 ------------------------------------------------------------------

// const Person = Record({
//     name: '홍길동',
//     age: 1
// });

// let person = Person();

// console.log(person);
// console.log(person.name, person.age);

// person = person.set('name', '김민준');
// console.log(person.name);

// // 값을 따로 지정해줄수도 있다.
// person = Person({
//     name: '영희',
//     age: 10
// })

// const { name, age } = person;
// console.log(name, age);

// // 재생성 할 일이 없다면 이렇게 해도 됨.

// const dog = Record({
//     name: '멍멍이',
//     age: 1
// })()

// console.log(dog.name);



render(<App />, document.getElementById('root'));
