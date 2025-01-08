/**
 * # 스택.
 * -> 먼저 입력한 데이터를 제일 나중에 꺼내는 구조. (LIFO - Last In First Out)
 * -> 스택에 삽입하는 연산을 'push'
 * -> 꺼내는 연산을 'pop'
 */

/**
 * 스택의 ADT* -> ADT: 추상 자료형 (abstract data type)
 * 스택은 push, pop, isFull, isEmpty 와 같은 연산을 정의해야 함.
 * 최근에 삽입한 데이터의 위치를 저장할 변수인 top 도 있어야 함.
 *
 * 연산 - isFull(): boolean
 *     - isEmpty(): boolean
 *     - push()
 *     - pop()
 * 상태 - top: int - 최근에 푸시한 데이터의 위치를 기록.
 *     data[maxsize]: ItemType - 스택의 데이터를 관리하는 배열. 최대 Maxsize
 *
 * push() 실행시 1. isFull() 2. top += 1 3. push() 수행
 * pop() 실행시 1. isEmpty() 2. top -= 1 3. pop() 수행
 */
