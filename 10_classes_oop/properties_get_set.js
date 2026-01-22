function hack (username , password){
    this._username = username
    this._password = password

    Object.defineProperty(this , 'username' , {
        get : function(){
            return this._username.toUpperCase()
        },
        set : function(value){
            this._username = value
        }
    })

}

const chai = new hack('arvin', 'header')
console.log(chai.username);


  