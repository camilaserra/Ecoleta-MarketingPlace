//importantar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db 

// utilizar o objeto de banco de dados, para nossas operações

//db.serialize(() => {
    //com comandos SQL eu vou: 
   
    // 1 criar uma tabela
   
    //db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       adress TEXT,
//       adress2 TEXT,
//       state TEXT,
//       city TEXT,
//       itens TEXT 
//     );
//   `)

//2 inserir dados na tabela

//   const query = `
//       INSERT INTO places (
//          image,
//          name,
//           adress,
//           adress2,
//           state,
//            city,
//           itens
//       ) VALUES (?,?,?,?,?,?,?);
//   `
//   const values = [
//      "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
//      "Paperside",
//      "Guilherme Gemballa, Jardim América",
//      "Nº 260",
//      "Santa Catarina",
//      "Rio do Sul",
//      "Residuos Eletrônicos, Lâmpadas"
//     ]

//  function afterInsertData(err) {
//     if(err) {
//       return console.log(err)
//     }
//   
//      console.log("cadastrado com sucesso")
//      console.log(this)
//    }

//     db.run(query, values, afterInsertData)


  // 3 consultar os dados da tabela

//     db.all(`SELECT name FROM places`, function(err, rows){
//      if(err) {
//        return console.log(err)
//      }
//     
//        console.log("aqui estão seus registros:")
//        console.log(rows)
//    })
  
  //4 deletar um dado da tabela

/* db.run(`DELETE FROM places WHERE id = ?`, [19], function(err) {
        if(err) {
          return console.log(err)
       }

        console.log("Registro deletado com sucesso!")
      }) */
  
//   })