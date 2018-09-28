let Mouse = function(name,weight,speed){
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;
    this.say = function(){
        console.log("chit chit...");
    }
    this.showStatus = function(){
        if(this.status==true){
            console.log("living");
        }else{
            console.log("death");
        }
    }
};
let Cat = function(name,weight,speed){
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.say = function(){
        console.log("meo meo...");
    }
    this.isCatched = function(mouse){
        if(this.speed>mouse.speed&&
            mouse.status==true){
            return true;
        }
    }
    this.eat = function(mouse){
        if(this.isCatched(mouse)){
            console.log("Eating....");
            mouse.status = false;
            this.weight += mouse.weight;
        }else{
            console.log("Can't catched this mouse!!");
        }
    }
};
let cat = new Cat("Tom",21,25);
let mouse = new Mouse("jerry",10,20);