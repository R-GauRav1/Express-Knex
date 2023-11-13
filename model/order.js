const { Model} = require('objection');
const customers = require('./customer');

class Order extends Model{

   static get tableName(){
    return 'orders';
   }

   static get totalColumn(){
    return 'total';
   }
   static get customerIdColumn(){
    return 'customer_id';
   }

   static get jsonSchema(){
    return{
      type:'object',
      required:['total'],
      properties:{
        id:{type:'integer'},
        total:{type:'number'},
        customer_id:{type:'integer'}
      }

    }
   }

}

module.exports = Order;