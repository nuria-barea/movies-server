
import database from '../../services/database.service';
import User from "./model";

class UserDAO {
   collectionName:string;
   constructor(collectionName:string){
      this.collectionName = collectionName;
   }

   async saveUser(user:User){
        const collection = await database.getCollection(this.collectionName)
        return collection.insertOne(user);
    }
}

export default new UserDAO('users');