// From DATABASE
const repositoryDestination = require("../../repository/repository.destinations");

//===================================================== This From Database;
const api_Destinations = async (req, res) => {
  const destinations = await repositoryDestination.allDestinations();
  return res.json({
    message: "Berhasil Mengambil Semua Data Destinasi",
    data: destinations,
  });
};
const api_DestinationById = async (req, res) => {
  const { id } = req.params;
  const destinations = await repositoryDestination.allDestinations();
  const destination = await repositoryDestination.getDestinationByid(id);
  const getIdDes = destinations.find((d) => {
    return d.destination_id === +id;
  });
  if (!getIdDes) {
    return res.json({
      message: `Data Id Destinasi ${id} Tidak Ada Dalam Database`,
    });
  } else {
    return res.json({
      message: `Data Id Destinasi : ${id} Berhasil Di Dapatkan`,
      data: destination,
    });
  }
};

const api_DestinationByName = async (req, res) => {
  const { name } = req.params;
  const destination = await repositoryDestination.getDestinationByname(name);
  const getdes = destination.length;
  if (getdes === 0) {
    return res.json({
      message: `Data Nama Destinasi : ${name} tidak ada dalam database`,
    });
  } else {
    return res.json({
      message: `Data Nama Destinasi : ${name} Berhasil didapatkan`,
      data: destination,
    });
  }
};

const api_addDestination = async (req, res) => {
  const {
    destination_name,
    location,
    facilities,
    describe,
    explained,
    img_src,
  } = req.body;
  // Mengecek apakah data destinasi telah ada
  const destinations = await repositoryDestination.allDestinations();
  const getNameDestination = destinations.find((d) => {
    return d.destination_name === destination_name;
  });
  if (getNameDestination) {
    return res.json({
      message: "Data Ini Telah ada",
    });
  } else {
    const data = {
      destination_name: destination_name,
      location: location,
      facilities: facilities,
      describe: describe,
      explained: explained,
      img_src: img_src,
    };
    await repositoryDestination.addDestination(data);
    const destinations = await repositoryDestination.allDestinations();
    return res.json({
      message: "Data Baru Destinasi Berhasil Di Tambahkan",
      data: destinations,
    });
  }
};
// setting Autentikasi
const api_updateDestination = async (req, res) => {
  const { id } = req.params;
  const {
    destination_name,
    location,
    facilities,
    describe,
    explained,
    img_src,
  } = req.body;
  const destinations = await repositoryDestination.allDestinations();
  const getId = destinations.find((d) => {
    return d.destination_id === +id;
  });
  if (!getId) {
    return res.json({
      message: `Data Id Destination ${id} Tidak Ada Dalam Database`,
    });
  } else {
    const data = {
      destination_name: destination_name,
      location: location,
      facilities: facilities,
      describe: describe,
      explained: explained,
      img_src: img_src,
    };
    await repositoryDestination.updateDestination(data, +id);
    const destinations = await repositoryDestination.allDestinations();
    return res.json({
      data: destinations,
    });
  }
};

const api_delDestination = async (req, res) => {
  const { id } = req.params;
  const destinaions = await repositoryDestination.allDestinations();
  const getId = destinaions.find((d) => {
    return d.destination_id === +id;
  });
  if (!getId) {
    res.json({
      message: `Data Id Destination : ${id} Tidak Ada Di Dalam Database`,
    });
  } else {
    await repositoryDestination.deleteDestination(+id);
    const destinaions = await repositoryDestination.allDestinations();
    res.json({
      message: "Deleting Data Succes",
      data: destinaions,
    });
  }
};

module.exports = {
  api_Destinations,
  api_DestinationById,
  api_DestinationByName,
  api_addDestination,
  api_updateDestination,
  api_delDestination,
};
