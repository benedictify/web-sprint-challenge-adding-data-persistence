
exports.up = function (knex) {
	return knex.schema.createTable('resources', table => {
		table.increments('resource_id');
		table.string('resource_name', 255)
			.unique()
			.notNullable();
		table.text('resource_description');
	})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('resources')
};