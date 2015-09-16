var app = angular.module('store', []);
app.controller('StoreController', function()
{
    this.products = gems;


});

var gems = [
{
    name: "Dodecahedron",
    price: 2.29,
    description: 'just a simple object we want to print to the page',
    CanPurchase: true,

},
{
    name: "Pentagonal Gem",
    price: 5.29,
    description: 'Pentagonal Gem just a simple object we want to print to the page',
    CanPurchase: false,
 
}
];
app.controller('goldController', function()
{
    this.manufacture= gold;

});
var gold =

    {
    name: "goldkumar",
    price: 24.29,
    description: 'goldkumarjust a simple object we want to print to the page',
    CanPurchase: true,

}
