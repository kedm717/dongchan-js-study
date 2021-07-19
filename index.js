// Class 문법

// Class 생성 예제
class game {
  constructor(){}

  method1(){}
  method2(){}
}

// constructor는 class로 생성된 객체를 생성하고 초기화 하는 메소드.
// 클래스 내부에서 단 한개만 존재 할수 있다.
class game {
  constructor(lol,pubg){
  this.lol = lol1;
  this.pubg = pubg2;
  }
}

// class 객체 내에 생성된 함수를 method라고 한다.
class game{
  constructor(lol, pubg){
    this.lol = lol1;
    this.pubg = pubg1;
  }
  start() {
    return '게임을 실행하자!';
  }
}
// Extends 
// extends 확장시키다. 다른 객체로 부터 상속을 시킬수있다.

class A {}

class B extends A {}

//
super()
class game{
  constructor(a, b){
    this.a = a;
    this.b = b;
  }
  start(){
    return '게임을 시작하다!'
  }
}
class music extends game {
  constructor(a,b){
    super(a, b)
  }
  sum(){
    return super.start() + this.a
  }
}