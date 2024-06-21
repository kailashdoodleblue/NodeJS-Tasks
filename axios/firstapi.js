const express = require('express'); 
const app = express();
const axios = require('axios');
app.get('/first', async (req, res) => {

    let data =await axios.get('https://fakestoreapi.com/products')
    let products = data.data;
    let values = await products.map(i=>({
        Id:i.id,
        Iitle:i.title,
        Description:i.description
    }))
    res.json(values)
//
// await fetch('https://fakestoreapi.com/products')
// .then(resu => resu.json())
// // .then(data=>res.json(data))
// .then(data=>{
//     let values =data.map(i=>({
//         Id:i.id,
//         Iitle:i.title,
//         Description:i.description
//     }))
//     res.json(values)
// })
})
app.listen(1001, () => {
    console.log(`Server is running on port 1001`);
});
