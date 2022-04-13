
// exporting middlw ware 

// seprate file mai rakhna good practice hai

module.exports = reqFilter = (req, res, next) => {

    if(!req.query.age)
    {
        res.send("please provide age");
    }
    else if(req.query.age < 18){
        res.send("you cannot access to this page");
    }
    else{

        next(); // kisi dosre page per jane k liye warna load karta rahega page show nahi karaye ga mtlb users walay page per nahi jayega ye load karta rahega
    }

}