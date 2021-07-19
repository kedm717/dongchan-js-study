// 프로그래머스 두개 뽑아서 더하기
// 입출력 예시 
// numbers	result
//[2,1,3,4,1]	[2,3,4,5,6,7]
//[5,0,2,7]	[2,5,7,9,12]


function test1(num){
const result = []// 빈 배열

for(let i=0; i<num.length -1; i++){
    for(let j=0; j<num.length; j++){
        let sum = num[i]+ num[j]
        if(result.indexOf(sum) < 0){
            result.push(sum)
        }
    }

}
result.sort((a,b)=>a-b)
return result
}
