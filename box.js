class Box
{
    constructor(){
        this.x = 250;
        this.y = 250;
        this.w = 50;
        this.h = 50;
    }
    show()
    {
      rect(this.x, this.y, this.w, this.h) 
    }
    set_speed(velocity)
    {
        this.x = this.x + velocity;
    }
}