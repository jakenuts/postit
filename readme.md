postit
==============

A tiny HTTP+JSON utility to post an object to a uri
--------------

- Install

	$ npm install postit

- Example

	var PostIt = require('postit');

	var poster = new PostIt('http://restapi.com/somepath');

	poster.post({ name: 'testevent', count:5 });

- Dependenices

	None! Just uses http & url

