// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose();

// Iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db
// utilizar o objeto de banco de dados, para nossas operacoes
db.serialize(() => {

    // // 1 Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     )
    // `)

    // // 2 Inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    //     "Papersider",
    //     "Grão Pará, Petrônio Mendes de Souza",
    //     "Número 260",
    //     "Minas Gerais",
    //     "Teófilo Otoni",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log()
    //     }

    //     console.log("cadastrado com sucesso");
    //     console.log(this);
    // }

    // db.run(query, values, afterInsertData)

    // // 3 Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log()
    //     }

    //     console.log('Aqui estao seus registros');
    //     console.log(rows)
    // })

    // // 4 Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
    //     if (err) {
    //         return console.log()
    //     }

    //     console.log("Registro deletado com sucesso");
    // })
})