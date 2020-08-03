var bigPic = document.querySelector("#cup");//큰 이미지 객체를 가져온다.
var smallPic = document.querySelectorAll(".small");//작은 이미지 객체를 가져온다.

for(var i=0;i<smallPic.length;i++){
    //var newPic=this.src;//클릭 이벤트가 발생한 대상의  src 속성 저장
    //bigPic.setAttribute("src",newPic);//속성을 바꿔준다.(바꿔줄 속성)//newPic 값을 큰 이미지의 src 속성에 할당한다.
    //smallPic[i].onclick=changePic;
    smallPic[i].addEventListener("click",changePic);
}

function changePic(){
    var newPic=this.src;
    bigPic.setAttribute("src",newPic);
}

var isOpen=false;
var view=document.querySelector("#view");
view.addEventListener("click",function(){
    if(isOpen==false){
        document.querySelector("#detail").style.display="block";
        view.innerText="상세 설명 닫기";
        isOpen=true;
    }else{
        document.querySelector("#detail").style.display="none";
        view.innerText="상세 설명 보기";
        isOpen=false;
    }
})