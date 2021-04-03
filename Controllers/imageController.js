const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

    if(req.files ===null){
        return res.status(400).json({msg: "No file uploaded"});
      }
  
      const file = req.files.image
      file.mv(`${__dirname}/../uploads/${file.name}`, err=>{
        if(err){
          console.error(err);
          return res.status(500).send(err);
        }
        
        if(`../uploads/${file.name}`){
            const imagePath = path.join(__dirname,'/../uploads',`/${file.name}`)
      
          cloudinary.uploader.upload(imagePath,
            function(err, result){
              if(err){
                return res.send(err);
              }
              console.log('File uploaded to Cloudinary')
      
              res.json(result);
            }
          )
        }
