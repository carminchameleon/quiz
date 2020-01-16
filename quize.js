//1. 버튼을 클릭하면 "안녕하세요"를 alert로 출력하시오.


const helloButton = document.querySelector(".helloButton")

helloButton.addEventListener("click", function(hello){
  alert("안녕하세요")
})


//2. 버튼을 클릭하면 현재 날짜/시간을 alert로 출력하시오.

const now = document.querySelector(".now")

now.addEventListener("click",getTime)

function getTime(){
  const now = new Date;
  alert(now)
}

//3. 파일명을 입력해서 버튼을 눌러서 hwp파일 인지 확인해서 p태그 사이에 결과를 출력하시오.


const file = document.querySelector(".file")
const input = file.querySelector("input")
const filebtn = file.querySelector(".filebtn")

filebtn.addEventListener("click", getFile)

/*
1. .hwp 가 포함되어 있는지 없는지를 검사

2. 그 검사 결과를 <p>태그에 붙여서 만들어야함

*/ 
function getFile(event){
  event.preventDefault()
  const fileName = input.value  
  console.log(input.value)
  checkFile(fileName)
}

function checkFile(text){
 var result = text.slice(-4) === ".hwp"
 console.log(result)
 makeptag(result)
 }

 function makeptag(text){
  const show = document.createElement("p")
  show.innerText = text;
  file.appendChild(show)
 }



 //4. 주민번호(13자리)를 입력받아서 생년월일을 추출하여 alert로 출력하시오.

 const year = document.querySelector(".year")
 const yearInput = year.querySelector("input")
 const yearbtn = year.querySelector("button")

 yearbtn.addEventListener("click", getYear)

 function getYear(event){
   const when = yearInput.value;
   const whenis = when.slice(0,2)
   noticeYear(whenis)
 }

 function noticeYear(text){
  alert(`you were born in 19${text}`) 
 }


 //5. 점수를 입력받아서 버튼을 누르면 A~F학점을 alert로 출력하시오. (문자열이 입력되면 다시 입력받도록 하시오.)
 
const score = document.querySelector(".score")
const scoreInput = score.querySelector("input")
const scorebtn = score.querySelector("button")

scoreInput.addEventListener("keydown", checkKey)

function checkKey(){
  const whatKey = scoreInput.value;
  console.log(whatKey)
  const type = isFinite(whatKey)
  if(type === false){
    alert("only number plz")
  }
}

scorebtn.addEventListener("click", getScore)

function getScore(){
  event.preventDefault()
  const howmuch = scoreInput.value;
  const grade = ''
  console.log(howmuch)
  if( howmuch >= 90){
   alert ("A")
  } else if ( howmuch >= 80 ){
    alert ("B")
  } else if ( howmuch >= 70){
    alert("C")
  } else if ( howmuch >= 60){
    alert("D")
  } else {
    alert("F")
  }
}



//9. 버튼1을 누르면 배경색을 red. 버튼2를 누르면 배경색을 blue로 변경되게 하시오.

const redbtn = document.querySelector(".redbtn")
const bluebtn = document.querySelector(".bluebtn")


redbtn.addEventListener("click", colorRed)
bluebtn.addEventListener("click", colorBlue)

function colorRed(){
  document.body.style.background = "red";
}

function colorBlue(){
  document.body.style.background = "blue"
}


//11. 핸드폰번호를 입력받아서 국번이 010,011,017,016,018,019인지 체크하는 프로그램을 작성하시오. input text는 3개 사용.

const phoneNumber = document.querySelector(".phoneNumber")
const phoneInput = phoneNumber.querySelector("input")
//const secondInput = phoneNumber.querySelector(".secondInput")
//const thirdInput = phoneNumber.querySelector(".thridInput")
const phonebtn = phoneNumber.querySelector(".phonebtn")

phonebtn.addEventListener("click", showNumber)

function showNumber(event){
  const thenumber = phoneInput.value;
  alertCode(thenumber)
}

function alertCode(text){
  if(text === "010"){
    alert(`Your national code is ${text}`)
  } else if( text === "011"){
    alert(`Your national code is ${text}`)
  } else if ( text === "017"){
    alert(`Your national code is ${text}`)
  } else if ( text === "016"){
    alert(`Your national code is ${text}`)
  } else if ( text === "018"){
    alert(`Your national code is ${text}`)
  } else if ( text === "019"){
    alert(`Your national code is ${text}`)
  } else {
    alert ( "Sorry, I can't find your national code")
  }
}

// 12. 두개의 숫자를 input text로 받아서 곱셈한 결과를 p태그에 출력하는 프로그램을 작성하시오.
 
const multiple = document.querySelector(".multiple")
const multiFirst= document.querySelector('.multiFirst')
const multiSecond = document.querySelector(".multiSecond")
const multibtn = document.querySelector(".multibtn")
const multiResult = document.querySelector(".multiResult")

multibtn.addEventListener("click", getNumber)

function getNumber(event){
  event.preventDefault()
  const first = multiFirst.value
  const second = multiSecond.value
  multi(first,second)
}

function multi(first,second){
  multiResult.innerText = first * second
}


//13. 남성, 여성중 한 개만 선택하도록 radio button을 만들고, 버튼을 누르면 선택한 값이 alert로 출력되도록 작성하시오.
 
const gender = document.getElementsByName("gender")
const genderbtn = document.querySelector(".genderbtn")
genderbtn.addEventListener("click", showgender)

function showgender(event){
  for (var i = 0; i<gender.length; i++){
    if(gender[i].checked){
      console.log(gender[i])
      console.log(gender[i].value)
      alert(gender[i].value)
    }
  }
}

//14. 운동, 독서, 영화감상 을 checkbox로 만들고, 선택한 값(복수)을 p태그에 출력하는 프로그램을 작성하시오.

const hobby = document.getElementsByName("hobby")
const hobbybtn = document.querySelector(".hobbybtn")
const hobbylists = document.querySelector(".hobbylists")

hobbybtn.addEventListener("click", gethobby)

var hobbylist = []

function gethobby(event){
  event.preventDefault();
  for ( var i = 0; i<hobby.length; i++){
    if(hobby[i].checked){
     hobbylist.push(hobby[i].value)
     showlist()
    }
  }

}

function showlist(){
  hobbylists.innerText = hobbylist
}

//15. 다음과 같은 JSON데이터를 변수에 저장한 후 name과 price를 각각 h1태그와 h2태그에 출력하는 프로그램을 작성하시오.
 
var products = [
  {"name":"mp3", "price":"1000"}, 
  {"name":"pc", "price":"2000"}, 
  {"name":"smart phone","price":"3000"}
]

var product = document.querySelector(".product")


function showproduct(){
  for ( var i = 0; i<products.length; i++){
    const name = document.createElement('h1')
    name.innerText = products[i].name
    console.log(products[i].name)
    product.appendChild(name)
    const price = document.createElement('h2')
    price.innerText = products[i].price
    product.appendChild(price)
  }  
}

showproduct()


/*
6. 다음과 같은 형태를 for문으로 출력하시오.
 
*
**
***
****
*****
*
**
***
****
*****

*/

const drawstar = document.querySelector(".drawstar")

const thestar = "*"

function makestar(){
  for(var j=0; j<2; j++){
  for( var i=0; i<6; i++){
    const starlist = document.createElement('div')
    starlist.innerText = thestar.repeat(i)
    drawstar.appendChild(starlist)
   }
}
}
makestar()

/*
7. 다음과 같은 형태를 for문으로 출력하시오.
 
###
%%%
###
%%%
###
%%%
###
%%%
###
%%%
###

*/

const drawit = document.querySelector(".drawit")

const tag = "###"
const percent = "%%%"

function makeit(){

  for ( var i = 0; i<5; i++){
    const drawtag = document.createElement('div')
    drawtag.innerText = tag
    drawit.appendChild(drawtag)
    const drawpercent = document.createElement("div")
    drawpercent.innerText = percent;
    drawit.appendChild(drawpercent)
  }
}

makeit()
/*
8. 다음과 같은 형태를 for문으로 출력하시오.
 
 *****
 ****
 ***
 **
 *
 *****
 ****
 ***
 **
 *
 */

 
 const secondstars = document.querySelector(".secondstars")

 const thatstar = "*"

 function disppear(){
   for(var j = 2; j>0; j--){
    for ( var i =5; i>0; i--){
       const anotherstar = document.createElement('div')
      anotherstar.innerText=thatstar.repeat(i);
      secondstars.appendChild(anotherstar)
    }
   }
 }


 disppear()