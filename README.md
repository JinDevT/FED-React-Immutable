# FED-React-Immutable

### Immutable.js 란?

- React에서는 불변함(Immutability) 를 지키며 상태 관리를 하는 것을 매우 편하게 해주는 라이브러리 입니다.

### Immutable.js 시작

프로젝트에서 immutable 을 사용할 땐, 다음과 같은 패키지를 설치해서 사용합니다.
```
npm add immutable
```
or

```
yarn add immutable
```

### Immutable.js 사용 할 때 규칙
- 1. 객체는 **Map**
- 2. 배열은 **List**
- 3. 설정할 땐 **set**
- 4. 읽을 땐 **get**
- 5. 읽은다음에 설정 할 땐 **update**
- 6. 내부에 있는걸 ~할 떈 뒤에 **In** 을 붙인다: setIn, getIn, updateIn
- 7. 일반 자바스크립트 객체로 변환 할 땐 **toJS()**
- 8. List 에는 배열 내장함수와 비슷함 함수들이 있다. -push, slice, filter, sort, concat... 전부 불변함을 유지함
- 9. 특정 key를 지울때 (혹은 List에서 원소를 지울 때) **delete** 사용
