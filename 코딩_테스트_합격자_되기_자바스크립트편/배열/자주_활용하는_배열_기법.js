// # 배열에 데이터 추가.
// push()
let arr = [1,2,3];
arr.push(4); // [1,2,3,4]

// concat()
arr = arr.concat([5,6]); // [1,2,3,4,5,6]

// 스프레드 연산자
arr = [...arr, ...[7,8]]; // [1,2,3,4,5,6,7,8]

// unshift() - 배열의 맨 앞에 추가
arr.unshift(0); // [0,1,2,3,4,5,6,7,8]

// splice() - 배열 중간에 데이터 추가.
arr.splice(2, 4, 9999); // [0, 1, 9999, 6, 7, 8]

// # 배열에서 데이터 삭제
// pop() - 마지막 데이터 삭제.
const array = [1,2,3,4,5];
const poppedEl = array.pop(); // 5

// shift() - 맨 앞 데이터 삭제
const shiftEl = array.shift(); // 1

// splice() - 중간 데이터 삭제. - 추가할 매개변수 생략
const removedEl = array.splice(1,2); // 3,4

// # 고차 함수를 이용하여 데이터에 특정 연산 적용.
// - 배열에 map(), filter(), reduce() 와 같은 유용한 고차 함수를 제공.

// 배열에 제곱 연산 적용.
const numbers = [1,2,3,4,5];
const squares = numbers.map((num) => num * num);

// 짝수 필터링 - 모듈러 연산
const evens = numbers.filter(num => num % 2 == 0);

// 전체 합
const sum = numbers.reduce((prev, curr) => prev + curr);