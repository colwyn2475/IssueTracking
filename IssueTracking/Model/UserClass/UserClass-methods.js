

model.UserClass.methods.insertUser = function() {
	// Add your code here;
	var iRole = ds.RoleClass.find("roleName = :1", "User");
	
	var iUser = new ds.UserClass ( {
	    userName : "User Name",
	    userPassword : "Password1",
	    role : iRole
	});
	iUser.save();
	return ds.UserClass.all();
};
model.UserClass.methods.insertUser.scope = "public";