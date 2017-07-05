'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
	return db.createTable('decision_info',{
		id: { type: "int", primaryKey:true, autoIncrement: true, notNull: true },
		prop: { type: "string", length: 10, notNull: true },
		dealer_card: { type: "string", length: 10, notNull: true },
    original_hand: { type: "string", length: 100,defaultValue:'' },
		win: { type:'smallint',length:1,defaultValue:0 },
    was_split: { type:'smallint',length:1,defaultValue:0 },
    note: { type:'string',length:1000,defaultValue:'' }
	})
};

exports.down = function(db) {
  return db.dropTable('decision_info');
};

exports._meta = {
  "version": 1
};
