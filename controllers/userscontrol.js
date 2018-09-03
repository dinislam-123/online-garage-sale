
exports.index = function(req, res){
    res.render('index');
}

exports.usersdisplay = function(req, res)
{
    var currentDate = new Date();
    var today = currentDate.getDate()+"/"+currentDate.getMonth()+"/"+currentDate.getFullYear();
    
    req.getConnection(function(err, connection){
        query = connection.query('select max(id) as newid from users', function(err, rows){
            // console.log("database connected......");
            res.render('users',{uid : (rows[0].newid)+1, userdate: today});
             });
            });
        }

exports.save = function(req,res){

        var input = JSON.parse(JSON.stringify(req.body));    
        req.getConnection(function (err, connection) {
           
            if(err){throw err}
            else
            {
                var data = {
                userdate: input.userdate,
                username: input.username,
                password: input.password,
                phone   :input.phone,
                email : input.email,
                location: input.location
            };
            
            var query = connection.query("INSERT INTO users set ? ",data, function(err, rows)
            {
              if (err)
                  console.log("Error inserting : %s ",err );
             
              res.render('index');
              
            });
            }
        });
    };

    exports.login = function(req, res){
        var input = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            if(err)
                {throw err}
            else
                {
                    console.log('database not connected..');
                    // res.render('users');
                }
        });
    }