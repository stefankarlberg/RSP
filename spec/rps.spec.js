const { rps } =  require('../spec.helper')

describe('rps', () => {
    let rps1 = new rps

it('returns', () => {
    expect(rps1.start(1)).to.eql(1)
});

})
