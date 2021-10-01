var score= 0;

setInterval(() => {
    
    var a = Math.round(Math.random() *12) ;
    console.log(a)
    
    if(a==0 || a ==1|| a ==2|| a ==3){
        document.querySelector(".villian1").classList.add("villianrun1")
        document.querySelector(".villian1").style.display = "block"
        
        setTimeout(() => {
            document.querySelector(".villian1").classList.remove("villianrun1")
            document.querySelector(".villian1").style.display = "none"
        }, 2800);
        
    }
    else if(a==4 || a ==5|| a ==6|| a ==7){
        document.querySelector(".villian").classList.add("villianrun")
        document.querySelector(".villian").style.display = "block"
        
        setTimeout(() => {
            document.querySelector(".villian").classList.remove("villianrun")
            document.querySelector(".villian").style.display = "none"
        }, 2800);
    }
    else if(a==8 || a ==9|| a ==10|| a ==11 || a==12){
        document.querySelector(".villian2").classList.add("villianrun2")
        document.querySelector(".villian2").style.display = "block"
        
        setTimeout(() => {
            document.querySelector(".villian2").classList.remove("villianrun2")
            document.querySelector(".villian2").style.display = "none"
        }, 2800);
    }
}, 3000);


document.onkeydown = function (a) {
    console.log(a.keyCode)
    
    if (a.keyCode == 38 ||a.keyCode== 32)  {
        dumpy = document.querySelector(".dumpy");
        dumpy.classList.add('jumpdumpy')
        setTimeout(() => {
            dumpy.classList.remove('jumpdumpy')
        }, 1000);
    }
    if(a.keyCode == 39){
        dumpy = document.querySelector(".dumpy");
        dumpyX =  parseInt(window.getComputedStyle(dumpy, null).getPropertyValue("left"));
        dumpy.style.left = dumpyX + 30+ "px";
    }
    if(a.keyCode == 37){
        dumpy = document.querySelector(".dumpy");
        dumpyX =  parseInt(window.getComputedStyle(dumpy, null).getPropertyValue("left"));
        dumpy.style.left = (dumpyX - 30)+ "px";
    }
}



setInterval(() => {
    dumpy = document.querySelector(".dumpy");
    villian = document.querySelector(".villian")
    villian1 = document.querySelector(".villian1")
    villian2 = document.querySelector(".villian2")
    
    dx = parseInt(window.getComputedStyle(dumpy, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dumpy, null).getPropertyValue("top"))
    
    vx = parseInt(window.getComputedStyle(villian, null).getPropertyValue("left"))
    vy = parseInt(window.getComputedStyle(villian, null).getPropertyValue("top"))
    
    v1x = parseInt(window.getComputedStyle(villian1, null).getPropertyValue("left"))
    v1y = parseInt(window.getComputedStyle(villian1, null).getPropertyValue("top"))
    
    v2x = parseInt(window.getComputedStyle(villian2, null).getPropertyValue("left"))
    v2y = parseInt(window.getComputedStyle(villian2, null).getPropertyValue("top"))
    
    
    offsetX = Math.abs(dx-vx);
    offsetY = Math.abs(dy-vy);
    
    offsetX1 = Math.abs(v1x-dx);
    offsetY1 = Math.abs(v1y-dy);
    
    offsetX2 = Math.abs(v2x-dx);
    offsetY2 = Math.abs(v2y-dy);
    //  console.log(offsetX2, offsetY2)    
    
    if(offsetX < 51  && offsetY < 76 || offsetX1 < 85  && offsetY1 < 100 || offsetX2 < 112  && offsetY2 < 50){
        setTimeout(() => {
            
            window.alert("Game Over")
        }, 15);
        console.log("gameover")
        document.querySelector(".gameover").style.display = "flex";
        
        setTimeout(() => {
            document.querySelector(".gameover").style.display = "none";
        }, 2000);
    }
    else{
        score+= 1/10
        var a = Math.round(score)
        document.querySelector(".score").innerHTML = a
    }
        
}, 150 );
        
    
            
        


