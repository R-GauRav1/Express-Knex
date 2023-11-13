const customer = require('./model/customer');
const order = require('./model/order');
const knex = require('./connection');

async function main(){
   //delete all person from db
    // await customer.query().delete();
    // await order.query().delete();

   //insert one Row in the db
   const cust = await customer.query().insert({
       name:'G  ',
       email:'g@abc,com'
    });
    console.log(cust);
   //Read All rows From db
   const readCust = await customer.query();
   console.log(readCust);

   //add an Order for a Given Custometer
   const ord = await customer.relatedQuery('order')
                             .for(cust.id)
                              .insert({total:90});
      console.log(ord);

      const del  = await customer.query().where('id','2').delete();
      console.log(del);
      
      
}
 main().then(()=>knex.destroy())
 .catch((err)=>{
    console.error(err);
    knex.destroy();
 })
