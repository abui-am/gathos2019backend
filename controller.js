'use strict';

var response = require('./res');
var connection = require('./connection');

exports.siswa = function(req, res) {
  connection.query('SELECT * FROM siswa', function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok('data ditambah', rows, res);
    }
  });
};

exports.index = function(req, res) {
  response.ok('Hello from the Node JS RESTful side!', '', res);
};

exports.findSiswa = function(req, res) {
  const id = req.params.id;

  connection.query('SELECT * FROM siswa where id = ?', [id], function(
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok('data ditemukan', rows, res);
    }
  });
};

exports.createSiswa = function(req, res) {
  const nama = req.body.nama;
  const sekolah = req.body.sekolah;
  const daerah = req.body.daerah;
  const no_wa = req.body.no_wa;

  connection.query(
    'INSERT INTO siswa (nama,sekolah,daerah,no_wa) values (?,?,?,?)',
    [nama, sekolah, daerah, no_wa],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok('Berhasil menambahkan user!', rows, res);
      }
    }
  );
};

exports.updateSiswa = function(req, res) {
  const id = req.body.id;
  const nama = req.body.nama;
  const sekolah = req.body.sekolah;
  const daerah = req.body.daerah;
  const no_wa = req.body.no_wa;

  connection.query(
    'UPDATE siswa SET nama = ?, sekolah = ?, daerah = ?, no_wa = ? WHERE id = ?',
    [nama, sekolah, daerah, no_wa, id],
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok('Berhasil merubah data siswa!', rows, res);
      }
    }
  );
};

exports.deleteSiswa = function(req, res) {
  const id = req.body.id;

  connection.query('DELETE FROM siswa WHERE id = ?', [id], function(
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok('Berhasil menghapus data siswa!', rows, res);
    }
  });
};
