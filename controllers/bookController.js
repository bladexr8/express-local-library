var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {
	// res.send('NOT IMPLEMENTED: Site Home Page');
	/*console.log('[INFO] Requesting Book Count...');
	Book.count({}, function(err, count) {
		console.log('[INFO] Book Count = ', count);
	}) ;
	res.render('index', { title: 'Local Library Home', error: null, data: {
		book_count: 1,
		book_instance_count: 2,
		book_instance_available_count: 3,
		author_count: 4,
		genre_count: 5
	} });*/
	

	console.log('[INFO] Getting Database Counts...');
    async.parallel({
    	book_count: function(callback) {
			console.log('[INFO] Getting Book Count...');
    		Book.count({},callback);	// Pass an empty object as match condition to find all docs of this collection
    	},
		book_instance_count: function(callback) {
			console.log('[INFO] Getting Book Instance Count...');
			BookInstance.count({}, callback);
		},
		book_instance_available_count: function(callback) {
			console.log('[INFO] Getting Available Book Instance Count...');
			BookInstance.count({status:'Available'}, callback);
		},
		author_count: function(callback) {
			console.log('[INFO] Getting Author Count...');
			Author.count({}, callback);
		},
		genre_count: function(callback) {
			console.log('[INFO] Getting Genre Count...');
			Genre.count({}, callback);
		},
    }, function(err, results) {
		console.log('[INFO] Rendering Home Page...');
    	res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Display list of all books.
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};