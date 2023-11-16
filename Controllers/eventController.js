const connection = require("../config/database");

exports.getEvents = async (req, res) => {
  try {
    const query1 = "SELECT * FROM event";
    const [result] = await connection.promise().query(query1);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured: couldn't get data " });
  }
};

exports.addEvent = async (req, res) => {
  try {
    const { title, date, ticketPrice, description, venue_id } = req.body;
    const query = `INSERT INTO event VALUES (${title},${date},${ticketPrice}),${description}),${venue_id})`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occured : could not add data" });
  }
};
exports.updateEventByVenueId = async (req, res) => {
  try {
    const venue_id = req.params.name;
    const event_id = req.params.id;
    const query = `UPDATE enrollement SET present=NOT present WHERE venue_id=(SELECT user_id 
                     FROM users WHERE full_name='${venue_id}') AND event_id=${event_id}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Could not update" });
  }
};

exports.deleteEvent = async (req, res) => {
  const venueId = req.params.id;
  const eventId = req.params.ID;
  try {
    const query = `DELETE FROM event WHERE venue_id=${venueId} AND trainee_id=${eventId}`;
    const [result] = await connection.promise().query(query);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "errorrr" });
  }
};
