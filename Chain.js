class Chain{
    constructor(somebodyA, somebodyB){
        var options = {
            bodyA : somebodyA,
            bodyB: somebodyB,
            stiffness: 0.004,
            length: 15,
        }
    
        this.chain = Constraint.create(options);
        
        World.add(world, this.chain)
    }

    display(){
        
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}