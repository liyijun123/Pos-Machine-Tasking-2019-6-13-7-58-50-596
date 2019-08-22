const main = require('../main');
const countProducts = main.countProducts;
const fetchproduct = main.fetchproduct;
const generatesdReceipItems = main.generatesdReceipItems;
const countToatalPrice = main.countToatalPrice;
it ('should count codes', () => {
    //given
    const codes = ['0003','0003','0001'];

    //when
    const countedCodes  = countProducts(codes);
    console.log(countedCodes);

    //then
    //expect(countedCodes[0].count).toBe(2);
});


it('should fetch product', () =>{

    //given
    const db = [
        {"id": "0001", "name" : "CocaCola", "price": 3},
        {"id": "0002", "name" : "DietCoke", "price": 4},

    ]
    const code ='0001';
    //when
    const product = fetchproduct(code,db);
    console.log(product);
    //then
    //expect(product,price).toBe({name:CocaCola},{price:3})

})


it('should printreceip',()=>{
      var codes = generatesdReceipItems(['0003'],['0003'],['0001']);
      console.log("generatesdReceipItem",codes)
      [
        { "name" : "CocaCola", "price": 3,"count":2.},
        {"name" : "DietCoke", "price": 4,"count":1}

      ]
    
})

it('should printreceip',()=>{
    var countToatalPriceInput=
    [
        { "name" : "CocaCola", "price": 3,"count":2.},
        {"name" : "DietCoke", "price": 4,"count":1}

      ]
    var toatolPrice = countToatalPrice(countToatalPriceInput);
    console.log(toatolPrice);
})


it('打小票',()=>{
    var assembleInput=
    [
        { "name" : "CocaCola", "price": 3,"count":2.},
        {"name" : "DietCoke", "price": 4,"count":1}

      ]

    var text = assemble(assembleInput,10);
    console.log(text);
})
