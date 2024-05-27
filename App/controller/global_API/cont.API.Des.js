// From DATABASE
const repositoryDestination = require("../../repository/repository.destinations");

// FROM JSON
const repositoryDestinationJSON = require("../../repository/repo_Global/repo.g.destinations");
//===================================================== This From Database;
const api_Destinations = async (req, res) => {
  const destinations = await repositoryDestination.allDestinations();
  return res.json({
    data: destinations,
  });
};
const api_DestinationById = async (req, res) => {
  const { id } = req.params;
  const destination = await repositoryDestination.getDestinationByid(id);
  return res.json({
    data: destination,
  });
};
// Setting Autentikasi
const api_addDestination = async (req, res) => {
  const { name, location, facilities, describe, explained, img_src } = req.body;
  // Mengecek apakah data destinasi telah ada
  const destinations = await repositoryDestination.allDestinations();
  const getNameDestinations = destinations.find((d) => {
    return d.destination_name === name;
  });
  if (getNameDestinations) {
    return res.json({
      message: "Data Ini Telah ada",
    });
  } else {
    const data = {
      destination_name: name,
      location: location,
      facilities: facilities,
      describe: describe,
      explained: explained,
      img_src: img_src,
    };
    await repositoryDestination.addDestination(data);
    const destinations = await repositoryDestination.allDestinations();
    return res.json({
      data: destinations,
    });
  }
};
// setting Autentikasi
const api_updateDestination = async (req, res) => {
  const { id } = req.params;
  const { name, location, facilities, describe, explained, img_src } = req.body;
  const data = {
    destination_name: name,
    location: location,
    facilities: facilities,
    describe: describe,
    explained: explained,
    img_src: img_src,
  };
  await repositoryDestination.updateDestination(data, id);
  const destinations = await repositoryDestination.allDestinations();
  res.json({
    data: destinations,
  });
};
const api_delDestination = async (req, res) => {
  const { id } = req.params;
  await repositoryDestination.deleteDestination(id);
  const destinaions = await repositoryDestination.allDestinations();
  res.json({
    message: "Deleting Data Succes",
    data: destinaions,
  });
};

// ======================================================= This From JSON

const api_Destinations2 = (req, res) => {
  const destinations = repositoryDestinationJSON.loadDestinations();
  res.json(destinations);
};

const api_DestinationById2 = (req, res) => {
  const { id } = req.params;
  const destination = repositoryDestinationJSON.findDataById(+id);
  res.json(destination);
};

const api_addDestination2 = (req, res) => {
  const {
    destination_name,
    location,
    facilities,
    describe,
    explained,
    img_src,
  } = req.body;
  const destinations = repositoryDestinationJSON.loadDestinations();
  const lengthdes = destinations.length;
  const nameDes = destinations.find((d) => {
    return d.destination_name === name;
  });

  if (nameDes) {
    return res.json({
      message: "data Telah ada",
    });
  } else {
    const data = {
      id: lengthdes + 1,
      destination_name: destination_name,
      location: location,
      facilities: facilities,
      describe: describe,
      explained: explained,
      img_src: img_src,
    };
    repositoryDestinationJSON.addData(data);
    const destinations = repositoryDestinationJSON.loadDestinations();
    return res.json({
      data: destinations,
    });
  }
};

// PR UPDATE DATA BEUM SELESAI
const api_updateDestination2 = (req, res) => {
  const {
    destination_name,
    location,
    facilities,
    describe,
    explained,
    img_src,
  } = req.body;
  const data = {
    destination_name: destination_name,
    location: location,
    facilities: facilities,
    describe: describe,
    explained: explained,
    img_src: img_src,
  };
  repositoryDestinationJSON.updateData(data);
  const destinaions = repositoryDestinationJSON.loadDestinations();
  res.json({
    data: destinaions,
  });
};

const api_delDestination2 = (req, res) => {
  const { id } = req.params;
  repositoryDestinationJSON.delData(+id);
  const destinaions = repositoryDestinationJSON.loadDestinations();
  res.json({
    data: destinaions,
  });
};
module.exports = {
  api_Destinations,
  api_DestinationById,
  api_addDestination,
  api_updateDestination,
  api_delDestination,
  api_Destinations2,
  api_DestinationById2,
  api_addDestination2,
  api_updateDestination2,
  api_delDestination2,
};
