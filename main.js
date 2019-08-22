
let db = [
    {"id": "0001", "name" : "CocaCola", "price": 3},
    {"id": "0002", "name" : "DietCoke", "price": 4},

]
function countProducts (codes) {
    var map = new Map();
  
    for(let i=0;i<codes.length;i++){
          var code = codes[i];
          if(!map.has(code)){
              var item = {
                  code:code ,
                  count:1

              };
              map.set(code,item)
              
          }
          else{
              var item =map.get(code);
              item.count++;
              map.set(code,item);
          }
          }
          var items=[];
          map.forEach(function(item){
              items.push(item);
          })

          return items;
    
    }

    function fetchproduct(code){
        for (let i = 0; i < db.length; i++) {
            if(code===db[i].id){
                return{
                    name:db[i].name,
                    price:db[i].price
                }
            }
           
            
        }
    }

    function generatesdReceipItems(codes){
          var countedCodes = countedCodes(codes);
          console.log(countProducts);
          var receipedItem =[];
          countedCodes.forEach(function(item){
              var product = fetchproduct(item.code);
              receipedItem.push({
                        name:product.name,
                        price:product.price,
                        count:item.count

              });

          });
        
          return receipedItem;
         
          
}
    function countToatalPrice(receipedItem){
        var toatalPrice =0;
           receipedItem.forEach(function(item){
               toatalPrice = toatalPrice+item.price*item.count
               
           });

        return toatalPrice;
    }
          

   function assemble(receipedItem,toatalPrice){
       let assembleInput = "";
       assembleInput = receipedItem+toatalPrice;
       

   }
         




    module.exports = {countProducts,fetchproduct,generatesdReceipItems,assemble}  ;