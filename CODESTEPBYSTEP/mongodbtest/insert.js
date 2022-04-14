const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    
    const result = await db.insert(
        [
            {name: 'max 01', brand: 'micromax', price:200, category:'mobile'},
            {name: 'max 02', brand: 'micromax', price:300, category:'mobile'},
            {name: 'max 03', brand: 'micromax', price:400, category:'mobile'},
        ]
    );

    if(result.acknowledged)
    {
        console.log('data inserted');
    }
    
}


insert();