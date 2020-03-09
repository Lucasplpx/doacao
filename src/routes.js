const { Router } = require("express");
const router = Router();
const banco = require("./db/banco");

router.get("/", (req, res) => {
  banco.query(`SELECT * FROM donors`, (err, result) => {
    if (err) return res.send("Erro de banco de dados.");
    // Lista de doadores
    const donors = result.rows;
    return res.render("index.html", { donors });
  });
});

router.post("/", (req, res) => {
  const { name, email, blood } = req.body;
  const data = { name, blood };

  if (name && email && blood) {
    // Salvar no banco de dados.
    const query = `
          INSERT INTO donors ("name", "email", "blood")
          VALUES ($1, $2, $3)`;

    const values = [name, email, blood];

    banco.query(query, values, err => {
      if (err) return res.send("erro no banco de dados.");
      return res.redirect("/");
    });
  } else {
    return res.send("Todos os campos são obrigatórios.");
  }
});
module.exports = router;
