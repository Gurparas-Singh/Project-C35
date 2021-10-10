class Form{
    constructor(){

    }

    display(){
        
        var button1 = createButton("Feed Pet");
        var button2 = createButton("Add Food");


        text("FeedTime: "+lastFed,180,125)
       
        button1.position(400,500);
        button2.position(725,500);


        if(foodS>0){
        button1.mousePressed(function(){
            foodS-=1;
            dog.addImage(dogImg2);
        })
    }
       button2.mousePressed(function(){
            foodS+=1;
            dog.addImage(dogImg1);
        })
    }
}
