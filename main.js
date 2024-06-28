let trans = document.getElementById('trans');
let sunimg=document.querySelector('.sun-img')
let moonimg=document.querySelector('.moon-img')
let moon =document.getElementById('moon');
let allproject=document.querySelector('.all-project')
let header=document.querySelector('.header');
let contenttitle=document.querySelector('.content-title');
let card =document.querySelector('.card');
let card2 =document.getElementById('card2');
let card3 =document.getElementById('card3');
let cardtitle=document.querySelector('.card-title');
let cardtitle2=document.getElementById('card-title2');
let cardtitle3=document.getElementById('card-title3');
let contenthead=document.querySelector('.content-head');
let head =document.querySelector('.head');
let boxs =document.querySelector('.boxs');
let h1 =document.querySelector('h1');
let titletext =document.querySelector('.title-text');
const nodeList = document.querySelectorAll('.item-title');
const itemtext = document.querySelectorAll('.item-text');



trans.onclick= function(){
  moonimg.style.display='block';
  sunimg.style.display='none';
  allproject.style.backgroundColor='white';
  header.style.backgroundColor='rgb(20, 22, 66)';
  contenthead.style.color='rgb(20, 22, 66)';
  card.style.backgroundColor='rgb(20, 22, 66)';
  card2.style.backgroundColor='rgb(20, 22, 66)';
  card3.style.backgroundColor='rgb(20, 22, 66)';
  cardtitle.style.backgroundColor='rgb(20, 22, 66)';
  cardtitle.style.color='white';
  cardtitle2.style.backgroundColor='rgb(20, 22, 66)';
  cardtitle2.style.color='white';
  cardtitle3.style.backgroundColor='rgb(20, 22, 66)';
  cardtitle3.style.color='white';
  h1.style.color='rgb(20, 22, 66)';
  titletext.style.color='rgb(20, 22, 66)';
  contenttitle.style.color='rgb(20, 22, 66)';
  head.style.color='rgb(20, 22, 66)';

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color='rgb(20, 22, 66)';
    itemtext[i].style.color='rgb(20, 22, 66)';
  }
  btnlist[0].style.backgroundColor = 'rgb(212, 10, 77)';
  
}



moon.onclick= function(){
  moonimg.style.display='none';
  sunimg.style.display='block';
  allproject.style.backgroundColor='rgb(20, 22, 66)';
  contenthead.style.color='white';
  card.style.backgroundColor='white';
  card2.style.backgroundColor='white';
  card3.style.backgroundColor='white';
  cardtitle.style.backgroundColor='white';
  cardtitle.style.color='white';
  cardtitle2.style.backgroundColor='white';
  cardtitle2.style.color='white';
  cardtitle3.style.backgroundColor='white';
  cardtitle3.style.color='white';
  h1.style.color='white';
  titletext.style.color='white';
  contenttitle.style.color='white';
  head.style.color='white';

  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color='white';
    itemtext[i].style.color='white';
  }
  btnlist[0].style.backgroundColor = 'rgb(212, 10, 77)';
  
}


let checkBox = document.getElementById("mycheck");
let ull = document.querySelector(".ull");
var flag=0;
checkBox.onclick =function(){
  if(flag==0){
    ull.style.display='block';
    flag=1;
  }
  else{
    flag=0;
    ull.style.display='none';
  }

}






