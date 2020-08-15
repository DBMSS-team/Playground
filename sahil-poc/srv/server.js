`use strict`;

const PORT = process.env.PORT || 4004;
const http = require('http');
const app = require('express')();
const passport = require('passport');

passport.initialize();

app.use(passport.authenticate('local', { session: false }));

app.post(
	'/login',
	passport.authenticate('local', { failureRedirect: '/login' }),
	res.redirect('/')
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err,
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {},
	});
});

const server = new http.createServer(app);
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
