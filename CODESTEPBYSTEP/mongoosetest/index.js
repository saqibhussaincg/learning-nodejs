const mongoose = require('mongoose'); 

const saveInDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm'); // connecting mongo compass 

    const productSchema = new mongoose.Schema(
        {
            name : String,
            brand : String,
            price : Number,
            category : String
        } 
    );

    // schema mai validation dalin k sirf name or price hi add honge os k elawa koi field nahi jayegi

    const ProductsModel = mongoose.model('products', productSchema);

    // jesa k model schema ko use kar k node or mongo ko connect karta hai "products" araha hai mongodb se or productschema oper se 

    let data = new ProductsModel(
        {
            name : 'M10',
            price : 5000,
            brand : 'vivo',
            category : 'mobile'
        }
    );

    // ab model ek instance leta hai new kar k jo bhi karna ho update delete etc

    let result = await data.save();

    // data ko save kara diya ek variable mai

    console.log(result);
}

// saveInDB();


// =========== UPDATE =========
const updateInDB = async (req, res) => {

    const ProductsModel = mongoose.model('products', productSchema);

    
    let data = await ProductsModel.updateOne(
        {name: "M40"},
        {
            $set: {price : 2000, name : "M45"}
        }
    )
    console.log(data);
}

updateInDB();



const deleteInDB = async () => {

    const ProductsModel = mongoose.model('products', productSchema);

    let data = await ProductsModel.deleteOne(
        {
            name : "F19"
        }
    )

    console.log("Delete hogaya", data);
}

// deleteInDB();