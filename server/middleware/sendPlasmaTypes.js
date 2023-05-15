const sendPlasmaTypes = (_req, res, next) => {
  res.sendPlasMIDI = function (plasMIDI) {
    res.send({ plasMIDI });
  };

  res.sendPlasmaUI = function (plasmaUI) {
    res.send({ plasmaUI });
  };

  next();
};

module.exports = { sendPlasmaTypes };
