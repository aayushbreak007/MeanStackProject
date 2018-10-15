/*we use mongoose to map javascript objects to mongo db objects */

var mongoose=require('mongoose');

var countrySchema=mongoose.Schema({

    /*this schema will represent a mongo db document that will be placed inside a mongo db collection */

    name:{type:String},

    capital:{type:String}

});

/*export the schema to use it in other files */

module.exports=mongoose.model('country',countrySchema);//Country is the collection NAME


