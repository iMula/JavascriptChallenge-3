/*HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.

You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.
*/


let pii = () => {
    name: "Seth Mula"
    ssn: 999-99-9999
}

//new user
function newUserBothPasswordsMatch(pw1Field, pw2Field){
    
    return (pw1Field == pw2Field);

}

////returning user
function checkOldUserPwCorrect(pw1Field, pwFrmDatabase){
    
    return (pw1Field == pwFrmDatabase);

}

//---------- but rather to make that ^ simpler to this Below

function checkPasswordCorrect(pw1Field, pw2Field, isNewUser) {
    if (isNewUser && (pw1Field != pw2Field)){
        return "passwords must match";
    }
    else if (!isNewUser && (pw1Field != pw2Field)){
        return "Your password is incorrect";
    }
    else return "complete";
}





class Pokemon {
    constructor (name, type){
        this.name; name;
        this.type; type;
        this.ishungry = false;
    }

    sayName () {
        console.log(`${this.name}`);
        console.log(`${this.name} has a type of ${this.type}`)
        this.isHungry = true;
    }

    eat(){
        if(this.isHungry){
            this.isHungry = false;
            console.log(`${this.name} ate its food and is not hungry anymore.`);
        }else{
            console.log(`${this.name} is not hungry anymore.`);
        }
    }
}

const pikachu = new Pokemon("Pikachu", "Electric");

Pokemon.prototype.attack = "Thunderbolt";

pikachu.sayName();
pikachu.eat();
console.log(pikachu.attack);

