const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Products = new Schema({
    product_name: {type: String, required: true, unique: true},
    subtitle: {type: String, required: true},
    product_img: {type: String, required: true},
    price: {type: SVGAnimatedNumberList},
    showroom: {type: String, required: true},
    represent: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    slug: {type: String, slug: 'product_name'}
},
{
    timestamps: true
})

module.exports = mongoose.model('Products', Products);