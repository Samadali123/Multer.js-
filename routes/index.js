var express = require('express');
var router = express.Router();
const upload = require(`./multer`);

router.get(`/`, function(req, res, next){
  res.render(`index`)

})


router.post(`/upload`, upload.single(`image`), function(req, res, next){
   res.send(req.file.filename)
})




module.exports = router;
