// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];

  const browse = (req, res) => {
    res.json(categories);
  };
  
  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
    const program = categories.find((p) => p.id === parsedId);
  
    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  };
  
  module.exports = { browse, read };