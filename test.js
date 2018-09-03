var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  port:3306,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Add primary key to an existing table:
  var sql = "select * from burgers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


$('#submit').on('click',function() {
       
  var ndiv = $('<div/>',{id:'newdiv'});
  
  var newitem = $('#inputtext').val();

       {{!-- newitem.attr('data-num',{{this.id}}); --}}

  {{!-- var p = $('<p>').attr("data-num","{{this.id}}");
      p.addClass('class','newitem');
      p.append(newitem); --}}

      {{!-- console.log(p.text()); --}}

  var mdevour = $('<button/>').attr({class:'devour', text:'Devour'});
  ndiv.append(mdevour);
  $('.row21').append(ndiv);

   {{!-- $.ajax({
      method:'POST',
      url:'api/burgers',
      header:{'accept':'application.Json','content-type':'application.Json'},
      data : Json.stringify({
          burger_name : newitem
     }),
 })  --}}

});

$('body').on('click','.devour', function(){

  {{!-- console.log('you click devour'); --}}

   var id = $(this).data('num');
console.log("eat burger # :" + id);

});