const connection = require("../config/cloudinary");

exports.getReservations = async (req, res) => {
  try {
    const query1 = "SELECT * FROM reservation";
    const [result] = await connection.promise().query(query1);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured: couldn't get data " });
  }
};

exports.addReservation = async (req, res) => {
  try {
    const { event_id, user_id, present } = req.body;
    const query = `INSERT INTO reservation VALUES (${event_id},${user_id},${present})`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error occured : could not add data" });
  }
};

exports.updateReservationByUserName = async (req, res) => {
  try {
    const user_name = req.params.name;
    const event_id = req.params.id;
    const query = `UPDATE enrollement SET present=NOT present WHERE trainee_id=(SELECT user_id 
                     FROM users WHERE full_name='${user_name}') AND class_id=${event_id}`;
    const [result] = await connection.promise().query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Could not update" });
  }
};

exports.getReservationByUserId = async (req, res) => {
  try {
    const userId = req.params.id;
    const query1 = `SELECT * FROM reservation WHERE user_id=${userId}`;
    const [result] = await connection.promise().query(query1);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured: couldn't get data " });
  }
};

exports.getReservationByEventIDAndUserId = async (req, res) => {
  try {
    const eventId = req.params.id;
    const UserId = req.params.Id;
    const query1 = `SELECT * FROM enrollement WHERE class_id=${eventId} AND trainee_id=${UserId}`;
    const [result] = await connection.promise().query(query1);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured: couldn't get data " });
  }
};

exports.deleteReservation = async (req, res) => {
  const eventId = req.params.id;
  const userId = req.params.ID;
  try {
    const query = `DELETE FROM reservation WHERE event_id=${eventId} AND user_id=${userId}`;
    const [result] = await connection.promise().query(query);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "errorrr" });
  }
};
