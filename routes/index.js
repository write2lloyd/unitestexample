
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index', { title: 'Express' });
  var sum = exports.add(2,2);
  res.send('Welcome to node ' + sum);

};

exports.add = function(num1, num2) {
	return num1 + num2;
};

exports.subtract = function(num1, num2) {
	return num1 - num2;
};