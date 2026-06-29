const app = require('express')();
const PORT = 3010;
app.get('/', (req, res) => res.json({ ok: true }));
if (require.main === module) app.listen(PORT, () => console.log(`API ready on ${PORT}`));
module.exports = app;
