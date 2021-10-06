

    function pressed1(){
        let text = "";
    let food =[' Chicken pizza','Mushroom pizza','Four cheese pizza','Apple','Orange','Banana','Ice cream','Fruit cake','Banana cake'];
    for (let i = 0; i < food.length; i++) {
      if (i=== 3) { break; }
      text += '<br>' +food[i];
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo").style.boxShadow = '1px 1px 2px 2px #972714';
    }
    //2
    
    function pressed2(){
        let text = "";
        let food =[' Chicken pizza','Mushroom pizza','Four cheese pizza','Apple','Orange','Banana','Ice cream','Fruit cake','Banana cake'];
   for (let i = 3; i < food.length; i++) {
     if (i=== 6) { break; }
     text += '<br>' +food[i];
   }
   document.getElementById("demo1").innerHTML = text;
   document.getElementById("demo1").style.boxShadow = '1px 1px 1px 2px #972714';
   }
   //3
   function pressed3(){
    let text = "";
    let food =[' Chicken pizza','Mushroom pizza','Four cheese pizza','Apple','Orange','Banana','Ice cream','Fruit cake','Banana cake'];
for (let i = 6; i < food.length; i++) {
 if (i=== 9) { break; }
 text += '<br>' +food[i];
}
document.getElementById("demo2").innerHTML = text;
document.getElementById("demo2").style.boxShadow = '1px 1px 1px 2px #972714';
}