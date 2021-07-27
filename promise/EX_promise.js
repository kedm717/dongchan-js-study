// 프로미스
// 콜백대신 가독성이 좋은 코드 작성하기 좋음
// 성공, 실패의 경우에 맞춰 각각 다른 코드 실행이 가능합니다

const promisetest = new Promise((resolve, reject)=>{
  resolve() // 성공을 나타내는
  reject() // 실패를 나타내는
})

promisetest.then(()=>{
  //성공했을때
}).catch(()=>{
  //실패했을때
})

// 프로미스는 new Promise로 만들어 준다
// 프로미스는 resolve 와 reject 두개의 인자를 갖는다.
// 실행성공은 then, 실패는 catch


const promisetest = new Promise((resolve, reject)=>{
  let sum = 1+1
  reject() // 성공을 나타내는
})

promisetest.then(()=>{
  console.log('성공했습니다.')
}).catch(()=>{
  console.log('실패했습니다.')
})

const promisetest = new Promise((resolve, reject)=>{
  let isTrue = true
  if(isTrue){
    resolve()
  }else{
    reject()
  }
})

promisetest.then(()=>{
  console.log('성공했습니다.')
}).catch(()=>{
  console.log('실패했습니다.')
})


//데이터 전달이 가능하다
const promisetest = new Promise((resolve, reject)=>{
  let isTrue = true
  if(!isTrue){
    resolve(5)
  }else{
    reject('실패했습니다')
  }
})

promisetest.then((data)=>{
  console.log('성공했습니다.',data)
}).catch((data)=>{
  console.log(data)
})


// 비동기식 함수를 사용해서 표현도 가능하다
const promisetest = new Promise((resolve, reject)=>{
  setTimeout(()=>{
   let sum = 5+5
   if(!sum){
     resolve()
   }else{
     reject('실패')
   }
  },1000)
 })
 
 promisetest.then(()=>{
   console.log('성공했습니다.')
 }).catch((data)=>{
   console.log(data)
 })
