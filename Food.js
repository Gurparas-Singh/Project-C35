class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
    }

    display(){
        var x,y=120;
        console.log(this.foodStock);

        imageMode(CENTER);
       
    if(foodS !== 0){
        for(var i=0; i<=foodS;i++){
            if(i%7 == 0){
                y=y+50;
                x=80
            }
            image(this.image,x,y,50,50);
            x=x+50;
            
        }
    }
    }
}