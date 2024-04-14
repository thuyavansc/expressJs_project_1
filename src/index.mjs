import Express from "express";

const app = Express();

const PORT = process.env.PORT || 3000;

const mockUser = [
  { id: 1, username: "anson", displayName: "anson" },
  { id: 2, username: "jack", displayName: "anson" },
  { id: 3, username: "adam", displayName: "anson" },
];

app.get("/", (request, response) => {
  response.send("Hello, World!").status(200);
});

app.get("/api/users", (req, res) => {
  res.send(mockUser);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);

  const parseId = parseInt(req.params.id);
  console.log(parseId);

  if (isNaN(parseId)) {
    return res.status(400).send({
      msg: "Bad Request. Invalid Number",
    });
  }

  const findUser = mockUser.find((user) => user.id == parseId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 1, name: "product-A", price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log("Running on PORT ${PORT}");
});
