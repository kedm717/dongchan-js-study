var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function test1() {
//chaining 으로 구현
  let obj= {};
  return fetch(newsURL)
  .then((data)=> data.json())
  .then(json =>{
    obj['news']= json.data
    return fetch(weatherURL)
  })
  .then((data)=>data.json())
  .then(json =>{
    obj['weather']=json
    return obj
  })
  
}

function test2() {
  // Promise.all 으로 구현
  let obj = {};
  const news = fetch(newsURL)
  .then(data => data.json())
  const weather = fetch(weatherURL)
  .then(data =>data.json())

  return Promise.all([news, weather])
  .then(([json1, json2])=>{
    obj['news'] = json1.data
    obj['weather'] = json2
    return obj
  })
}
async function test3() {
 // async/await 으로 구현
  
  const news = await fetch(newsURL)
  .then(data => data.json())
  const weather = await fetch(weatherURL)
  .then(data =>data.json())

  return {news: news.data,  weather : weather}
}
