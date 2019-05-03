require('../spec.helper');
require('../src/js/rps.js');

context('User can input a value and get RPS results', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });




  // Checking existens of message
  it('clicking on the "rock" button', async () => {
    await browser.clickOnButton("button[id='rock']")
    let message = await browser.getContent("div[id='battle_page_message']")
    expect(message).to.contain('Thank you, your subscription has been confirmed!');
  })

  // Checking Statistics
  it('Statistics', async () => {

    await browser.clickOnButton("button[id='rock']")
    let result = await browser.getContent("div[id='battle_page_message']")
    if (result = "You win!"){
      let count = browser.document.getElementById("count_person").innerText;
      expect(count).to.eql('Your Wins 1');
    } else if (result = "PC win!") {
      let count = browser.document.getElementById("count_pc").innerText;
      expect(count).to.eql('PC Wins 1');
    } else {
      let count = browser.document.getElementById("count_draws").innerText;
      expect(count).to.eql('Draws 1');

    }

    
  })

 


});