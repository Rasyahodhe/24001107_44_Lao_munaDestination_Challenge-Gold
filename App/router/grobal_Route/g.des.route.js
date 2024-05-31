const express = require("express");
const r_global_des = express.Router();
const {
  api_Destinations,
  api_addDestination,
  api_updateDestination,
  api_delDestination,
  api_DestinationById,
  api_DestinationByName,
} = require("../../controller/global_API/cont.API.Des");
r_global_des
  .get("/api/destinations", api_Destinations)
  .get("/api/destinations/:id", api_DestinationById)
  .get("/api/destinations/name/:name", api_DestinationByName)
  .post("/api/destinations", api_addDestination)
  .put("/api/destinations/:id", api_updateDestination)
  .delete("/api/destinations/:id", api_delDestination);

module.exports = { r_global_des };
