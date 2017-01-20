function sendFunc(res, string){
	res.sendFile(process.cwd() + "/public/views/" + string +".html");
}
function queryFunc(connection, string,  callback){
connection.query(string, function(err, rows, fields) {
  	if (err) throw err;
  	callback(rows)
		});
}

module.exports = function(app,connection) {

	app.get("/", function(req, res){
		sendFunc(res, "home");
	});
		app.get("/add", function(req, res){
		sendFunc(res, "add");
	});
	app.get("*", function(req,res){
			res.send("404'd!")
		})
}
