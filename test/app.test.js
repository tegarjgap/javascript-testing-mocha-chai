var expect = require('chai').expect
var gatherNamesOf = require('../app.js')

describe('gatherNamesOf', function() {
	var people, names
	
	beforeEach(function() {
		people = [{name: 'Asep'}, {name: 'Hikmat'}, {name: 'Fatah'}]
		names = gatherNamesOf(people)
	})

	it('should return an array', function() {
		expect(names).to.be.an('array')
	})

	it('should give me output the same length as the input', function() {
		expect(names.length).to.be.equal(people.length)
	})

	it('should give me the name of the object passed in', function() {
		expect(names[0]).to.be.equal(people[0].name)
	})
})