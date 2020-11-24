/*----------------- 
03. 연산자
------------------*/

/*-----산술 연산자-----*/
//:: 사칙연산과 같은 작업을 하는 연산자

let a = 1 + 2;
console.log(a); //3

let b = 1 + 2 - (3 * 4) / 4;
console.log(b); //0

let c = 1;
c++;
++c;
console.log(c); //3

let d = 1;
console.log(d++); //1
console.log(++d); //3

/*
  console.log(d++);를 할 때에는 1을 더하기 직전 값을 보여주고

  console.log(++d);를 할 때에는 1을 더한 다음의 값을 보여줍니다.
*/

let e = 1;
console.log(e--); //1

let f = 1;
f--;
console.log(f); // 0

/*-----대입 연산자-----*/
//:: 특정 값에 연산을 한 값을 바로 설정 할 때 사용할 수 있는 연산자

let first = 1;
first = first + 3;

//위 코드를 대입연산자를 사용하면 아래와 같이 작성할 수 있습니다.
first += 3;

let second = 1;
second += 3;
second -= 3;
second *= 3;
second /= 3;

console.log(second); // 1

/*-----논리 연산자-----*/
//:: 뷸리언 타입(true 혹은 false)를 위한 연산자

// ! : not
// && : AND
// || : OR

/*--Not--*/
const red = !true;
console.log(red); //false

const blue = !false;
console.log(blue); // true

/*--And--*/
const yellow = true && true;
console.log(yellow);

let green = false;
green = false && true;
green = true && false;
//***AND 연산자는 양쪽의 값이 둘다 true 일 때만 결과물이 true 입니다.
//위 와 같은 상황엔 모두 false

/*--Or--*/
let purple = true || false;
purple = false || true;
purple = true || false;
//***OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true입니다. 그리고 두 값이 둘 다 false 일 때만 false입니다.

let beige = false || false;
//위와 같은 경우엔 false

/*--연산순서--*/
/*
  사칙연산을 할 때 곱샘 나눗셈이 먼저고 그 다음이 덧셈 뺄셈인 것 처럼,
  논리 연산자도 순서가 있습니다.
  순서는 Not -> And -> Or 입니다.
*/

const hello = !((true && false) || (true && false) || !false);

//1. 괄호안의 Not 부터 먼저 처리!
!((true && false) || (true && false) || true);

//2. 그 다음엔 AND 처리
!(false || false || true);
/* **AND연산자는 양쪽 값이 모두 true여야만 결과물이 true 이므로 위 AND 연산자는 false !! */

//3. OR 연산자를 좌측에서 우측으로 처리
!true;
/* **OR연산자는 양쪽의 값 중 하나라도 true라면 결과물이 true이므로 결과값은 true !!*/

//4. 결국 결과값은 false 가 된다

/*-----비교 연산자-----*/
//:: 두 값을 비교할때 사용

const money = 1;
const house = 1;
const equals = a === b;
