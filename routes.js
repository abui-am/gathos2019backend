"use strict";

module.exports = function(app) {
  var todoList = require("./controller");

  app.route("/").get(todoList.index);

  /** GET */
  app.route("/siswa").get(todoList.siswa);

  app.route("/siswa/:id").get(todoList.findSiswa);

  /** POST */

  app.route("/siswa").post(todoList.createSiswa);

  /** PUT */

  app.route("/siswa").put(todoList.updateSiswa);

  /** DELETE */

  app.route("/siswa").delete(todoList.deleteSiswa);
};
