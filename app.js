const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('The server is healthy test v1')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})


