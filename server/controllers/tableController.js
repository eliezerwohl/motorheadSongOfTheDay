exports.createTable =function(connection){
	var userTable ="Create TABLE song(" 
	userTable+= "id INT(11) AUTO_INCREMENT,"
	userTable += "title varchar(255), cover BOOLEAN, PRIMARY KEY(id))"
	connection.query(userTable, function(err, rows, fields) {

		
	})

}