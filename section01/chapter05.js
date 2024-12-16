// 자료형 (Type) = 집합
// 동일한 속성이나 특징을 가진 원소들을 묶은 것

// 원시타입 종류

// 1. Number Type
let num1 = 20;
let num2 = 1.5;
let num3 = -15;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "홍길동";
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce); // 홍길동목동

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // ``을 이용해서 변수의 값을 동적으로 문자열에 포함시킬 수 있음
console.log(introduceText);

// => 이러한 문법들을 템플릿 리터럴 문법이라고 함 (실무에서 자주 사용됨)

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none); // undefined (선언만 했을 뿐 아무런 값 초기화안함)
