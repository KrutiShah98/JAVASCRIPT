function display(){
    console.log("this is display");
}
const demo=()=>{
    console.log("this is demo arrow function");
}
obj={
    normalfunctio:display(),
    arrowfunction:demo()
}
obj.normalfunction();
obj.arrowfunction();

//this refer outer property in fat arrow function