const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'desafiodb'
}

const mysql = require('mysql')

app.get('/', (req, res) => {
    
    const connection = mysql.createConnection(config)
    connection.connect()

    const sql = `INSERT INTO people(name) values ("Adriano")`
    
    connection.query(sql)


    const querySelect = "SELECT * FROM people"

    let stringResponse = `
    
        <p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>
        <p />
        <p>- Lista de nomes cadastrada no banco de dados.</p>
    `

    connection.query(querySelect, function(error, results) {
        if (error) throw error;

        results.forEach(element => {
            stringResponse.concat(
                `
                    <p>--- ${element.name} </p>
                `
            )
        })
        
        
    })
    
    connection.end()
    
    res.send(stringResponse)
    

})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
