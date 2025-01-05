// 값 교환하기
let a = 5;
let b = 10;
let temp;

temp = b;
b = a;
a = temp;

// 구조 분해 할당을 통해 단순화
let c = 5;
let d = 10;
[c, d] = [d, c];
// ------------------------------------------------------

// 비구조화 할당
const makePerson = ({ familyName, givenName, address }) => {
    return {
        name: `${givenName} ${familyName}`,
        address,
    }
}

const person = makePerson({
    familyName: 'James',
    givenName: 'Lebron',
    address: 'LA',
    country: 'USA'
});

// 스프레드 연산자
// 1. 배열 병합
const evenNumbers = [2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers);

// 2. 객체 병합
const person2 = {
    name: 'Stephen Curry',
    familyName: 'Curry',
    givenName: 'Stephen',
    country: 'Korea',
};
const address = {
    country: 'USA',
    city: 'San Francisco'
}
const merge = {...person2, ...address};
// country의 키가 중복되어 병합 된 경우, 후속으로 병합된 키 값이 유지됨.

// 배열 내 같은 요소 제거하기.
const names = ['Lee', 'Kim', 'Park','Lee', 'Kim'];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);