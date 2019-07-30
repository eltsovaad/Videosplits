questApp.filter('firstLastName', function(){
    return function(text){
        text=text.firstName+" "+text.lastName
        if((text.firstName.indexOf(fstNme)!==-1)||(text.lastName.indexOf(fstNme)!==-1)){
            return text;
        }
    }
});