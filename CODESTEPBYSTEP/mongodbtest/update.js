const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : 'M50'},{
            $set : {name : 'M50', price: 600}
        }
    );
    console.log(result);
};


updateData();