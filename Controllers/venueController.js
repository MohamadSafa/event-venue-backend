const { response } = require("express");
const connection = require("../config/database");

// HON AAM BAAML AAD
exports.addVenue = async (req, res) => {
  try {
    const { name, description, capacity, image, address } = req.body;
    const query = `INSERT INTO venues (name,description,capacity,image,address) VALUES (${name},'${description}','${capacity}','${image}','${address}')`;
    const [results] = await connection.promise().query(query);
    res.status(201).json(results);
  } catch (error) {
    console.error("Error adding venue:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getAllVenues = async (req, res) => {
  try {
    const query = "SELECT * FROM venues";
    const [response] = await connection.promise().query(query);
    res.status(200).json({
      success: true,
      message: `All venues retrieved successfully`,
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unable to get all venues`,
      error: error.message,
    });
  }
};

// "".getAllVenues" (was done according to omar's correction session)
//".getAdd" (how i did it)

exports.getOneVenueById = async (req, res) => {
  try {
    const venueId = req.params.id;
    const query = `SELECT * FROM venues WHERE venue_id= ${venueId}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERRORRRR" });
  }
};

exports.getOneVenueByVenueId = async (req, res) => {
  try {
    const venueId = req.params.id;
    const query = `SELECT * FROM venues WHERE venue_id= ${venueId}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERRORRRR" });
  }
};

exports.deleteVenue = async (req, res) => {
  const venueId = req.params.id;
  try {
    const query = `DELETE FROM venues WHERE venue_id=${venueId}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "errorrr" });
  }
};

exports.updateVenue = async (req, res) => {
  const venueId = req.params.id;
  const { name, description, capacity, image, address } = req.body;
  try {
    const query = `UPDATE venues SET name="${name}",description="${description},capacity="${capacity},image="${image},address="${address}" WHERE venue_id=${venueId}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "errorrr" });
  }
};
