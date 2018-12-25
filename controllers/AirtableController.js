const airtable = require('airtable');
let base;
let tablename;

module.exports.verifyBase = (req, res, next) => {
  if (req.params.base) {
    base = new airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(req.params.base);
    next();
  } else {
    res.status(500).json({
      err: 'Invalid Base',
    });
  }
};

module.exports.create = (req, res) => {
  tablename = req.params.tablename;

  base(tablename).create(req.body.fields, (err, record) => {
    if (err) {
      res.status(500).json(err);
    }

    res.status(200).json(record);
  });
};

module.exports.update = (req, res) => {
  tablename = req.params.tablename;
  if (req.body.id) {
    base(tablename).find(req.body.id, (err, record) => {
      if (err) {
        return err;
      } else {
        record.putUpdate(req.body.fields, {
        }, (err, record) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(record);
          }
        });
      }
    });
  }
};

module.exports.delete = (req, res) => {
  tablename = req.params.tablename;
  if (req.query.id) {
    base(tablename).find(req.query.id, (err, record) => {
      if (err) {
        return err;
      } else {
        const id = record.getId();

        record.destroy(() => {
          res.status(200).json({
            message: 'deleted record' + ' ' + id,
          });
        });
      }
    });
  }
};
