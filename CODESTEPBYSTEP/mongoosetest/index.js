const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema(
    {
        name : String,
        brand : String,
        price : Number,
        category : String
    } 
);

const saveInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm'); // connecting mongo compass 

    

    // schema mai validation dalin k sirf name or price hi add honge os k elawa koi field nahi jayegi

    const ProductsModel = mongoose.model('products', productSchema);

    // jesa k model schema ko use kar k node or mongo ko connect karta hai "products" araha hai mongodb se or productschema oper se 

    let data = new ProductsModel(
        {
            name : 'Chai',
            price : 4000,
            brand : 'tapal',
            category : 'tea'
        }
    );

    // ab model ek instance leta hai new kar k jo bhi karna ho update delete etc

    let result = await data.save();

    // data ko save kara diya ek variable mai

    console.log(result);
}

// saveInDB();


// =========== UPDATE =========
const updateInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm'); // connecting mongo compass 


    const ProductsModel = mongoose.model('products', productSchema);

    
    let data = await ProductsModel.updateOne(
        {name: "M60"},
        {
            $set: {price : 2000}
        }
    )
    console.log("UPDATE" , data);
}

// updateInDB();



const deleteInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm'); // connecting mongo compass 

    const ProductsModel = mongoose.model('products', productSchema);

    let data = await ProductsModel.deleteOne(
        {
            name : "Chai"
        }
    )

    console.log("Delete hogaya", data);
}

// deleteInDB();

const FindInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm'); // connecting mongo compass 

    const ProductsModel = mongoose.model('products', productSchema);

    let data = await ProductsModel.find();

    console.log("Find hogaya", data);
}

FindInDB();