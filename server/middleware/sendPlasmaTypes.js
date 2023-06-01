const sendPlasmaTypes = (_req, res, next) => {
  res.sendPlasMIDI = function (plasMIDI, file = null) {
    res.send({
      file: file,
      plasMIDI,
      msg: res.statusCode === 200 ? "Success" : "Error",
    });
  };

  res.sendPlasmaUI = function (plasmaUI) {
    res.send({ plasmaUI, msg: res.statusCode === 200 ? "Success" : "Error" });
  };

  next();
};

module.exports = { sendPlasmaTypes };
