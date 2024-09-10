const express = require('express');
const app = express();
const connectDB = require('./dbConnect');
const shortURL = require('./model/shortnerModel')
const customRoute = require('./routes/routes')
const PORT = 8000
connectDB();
app.use(express.json());
app.use('/url',customRoute);
app.get("/:shortId", async (req, res) => {
    const id = req.params.shortId;
    
    try {
        const result = await shortURL.findOne({ shortnerID: id });
        
        if (!result) {
            // Handle the case where no matching short ID is found
            return res.status(404).json({ msg: "Short URL not found" });
        }
       const  Redirecturl = result.redirectURL;
        res.redirect(Redirecturl)
    } catch (error) {
        // Handle server errors
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});
app.listen(PORT,()=>{
    console.log(`SERVER STARTED ON ${PORT}`);
})