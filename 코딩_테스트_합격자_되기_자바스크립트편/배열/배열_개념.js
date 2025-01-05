/**
 * 배열 선언
 */
// 리터럴을 이용
const arr = [0,0,0,0,0,0];
// 배열 생성자를 이용
const arr1 = new Array(6); // [undefined, undefined...]
const arr2 = [...new Array(6)].map((_, i) => i+1); // [1,2,3,4,5,6]
// Array.fill() 함수
const arr3 = new Array(6).fill(0); // [0,0,0,0,0,0]

// 자바스크립트의 배열은 동적으로 크기를 조절할 수 있도록 구현되어 있음.
// 그래서 자바스크립트의 배열은 다른 언어의 배열 기능을 그대로 사용할 있으면서 배열 크기도 가변적이므로,
// 코테에서 고려할 사항을 조금 더 줄여줌. 또, 슬라이싱, 삽입, 삭제, 연결 등의 연산을 제공하므로 편리.

/**
 * 배열과 차원.
 * 배열은 2차원 배열, 3차원 배열과 같이 다차원 배열을 사용할 때도 많음.
 * 하지만 컴퓨터 메모리의 구조는 1차원이므로 2차원,3차원의 배열도 실제로는 1차원 배열에 저장됨.
 * 다시 말해, 배열은 차원과는 무관하게 메모리에 연속 할당됨.
 */
// 크기가 3*4인 배열을 선언하는 예.
const arr4 = [...new Array(3)].map((_, i) => new Array(4).fill(i));
console.log(arr4);
