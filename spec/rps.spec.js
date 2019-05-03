require('../spec.helper')
var rps = require('../src/js/rps.js');

describe('RPS Rspec', () => {

    it('should return draw', async () => {
        expect(battle("rock", "rock")).to.eql('Draw');
      })

      it('should return person wins', async () => {
        expect(battle("paper", "rock")).to.eql('You wins!');
      })

      it('should return PC wins', async () => {
        expect(battle("paper", "rock")).to.eql('PC wins!');
      })
        
})