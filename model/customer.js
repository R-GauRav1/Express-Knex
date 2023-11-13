const { Model} =require('objection');
const order = require('./order');
const softDelete  = require('objection-soft-delete');

class Customer extends softDelete({columnName : 'deleted'})(Model){
   static get tableName(){
   return 'customers';
   }

   static get nameColumn(){
    return 'name';
   }
   static get emailColumn(){
    return 'email';
   }
     static get jsonSchema(){
      return{
        type:'object',
        required:[ 'name','email'],
        properties:{
            id:{ type:'integer'},
            name:{ type:'string', minLength:1,maxLength:255},
            email:{type:'string'},
            deleted: { type: 'boolean' }
        }
      }

    };
    static relationMappings={
        order:{
            
            relation:Model.HasOneRelation,
            modelClass:order,
            join:{
                from:'customers.id',
                to:'orders.customer_id'
            }
        }
    }
}

module.exports = Customer;