const app = require('express')()
app.use((req, res,) => {
res.send('hello By Docker')
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
