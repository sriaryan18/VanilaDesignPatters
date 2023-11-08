function factory({username,name,email}){
    return {
        username,
        name,
        email,
        showInfo(){
            return `INFO name : ${this.name}  ${this.email}`
        }
    }
}

const user1 = factory({username:'sriAryan18',name:'Aryan',email:'sri.aryan18@gmail.com'});

console.log(user1,user1.showInfo());