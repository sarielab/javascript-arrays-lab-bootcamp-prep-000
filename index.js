var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (el) => kittens.push(el)
var destructivelyPrependKitten = el => arr.unshift(el)
var destructivelyRemoveLastKitten = () => arr.pop()
var destructivelyRemoveFirstKitten = () => arr.shift()
var appendKitten = (el) => arr.concat(el)
var prependKitten = (el) => [el, ...kitten]


describe('Arrays', function() {
  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })
})