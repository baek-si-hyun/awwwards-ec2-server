const connection = require("../dbConfig.js");

const updateDB = async (today, total) => {
  connection.query(
    `update visited_table set ${today} = ${today} + 1, ${total} = ${total} + 1`,
    (error, rows) => {
      if (error) throw error;
      console.log(error);
    }
  );
};

const visitedCtrl = {
  getVisited: async (req, res) => {
    connection.query("select * from visited_table", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
  setVisited: async (req, res) => {
    const receivedData = req.body;

    switch (receivedData.pathname) {
      case "/visual-coin":
        await updateDB("visited_visaulcoin_today", "visited_visaulcoin_total");
        break;
      case "/carrot-market":
        await updateDB("visited_carrotmarket_today", "visited_carrotmarket_total");
        break;
      case "/awwwards":
        await updateDB("visited_awwwards_today", "visited_awwwards_total");
        break;
      case "/kanban":
        await updateDB("visited_kanban_today", "visited_kanban_total");
        break;
      case "/coin":
        await updateDB("visited_coin_today", "visited_coin_total");
        break;
      case "/myapp":
        await updateDB("visited_myapp_today", "visited_myapp_total");
        break;
      case "/airbnb":
        await updateDB("visited_airbnb_today", "visited_airbnb_total");
        break;
      default:
        break;
    }
    res.send("update success");
  },
};

module.exports = visitedCtrl;
