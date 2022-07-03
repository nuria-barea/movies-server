
import database from '../../services/database.service';
import User from "./model";

class UserDAO {


   async saveUser(user:User){
       const queryStr= 'insert into "user" (email, password, name) values ($1,$2,$3) RETURNING *'
       const values =Object.values(user);
      return database.query(queryStr,values);
    }
}

export default new UserDAO();