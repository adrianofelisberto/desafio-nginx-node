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
    
    console.log(sql)

    connection.query(sql)


    const querySelect = "SELECT * FROM people"

    console.log(querySelect)

    let stringResponse = `
    
        <p>Full Cycle Rocks!</p>
        <p />
        <p>- Lista de nomes cadastrada no banco de dados.</p>
    `

    connection.query(querySelect, function(error, results) {
        if (error) throw error;

        results.forEach(element => {
            stringResponse = stringResponse.concat(
                `
                    <p>-- ${element.name} </p>
                `
            )
        })
        
        res.send(stringResponse)
    })

    connection.end()
    
    

})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
