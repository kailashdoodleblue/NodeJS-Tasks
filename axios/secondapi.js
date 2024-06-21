const express = require('express'); 
const app = express();
app.get('/second', async (req, res) => {
    res.json({message:"hellosecond"})
})
app.listen(1002, () => {
    console.log(`Server is running on port 1002`);
});
