"use strict";

exports.ok = function(message, data, res) {
  var response = {
    status: 200,
    message: message,
    data: data
  };
  res.json(response);
  res.end();
};
