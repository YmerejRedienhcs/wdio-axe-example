// load the axe-core script
const axeSource = require('axe-core').source;
const assert = require('assert');

describe('axe test', function () {
  it('should return results', function () {
    browser.url('./');

    // inject the script
    browser.execute(axeSource);

    // run inside browser and get results
    let results = browser.executeAsync(function (done) {
      // run axe on our site
      axe.run(function (err, results) {
        if (err) done(err)
        done(results);
      });
    });

    // assert there are no violations
    assert.equal(results.value.violations.length, 0, 'Expected no a11y violations');
  })
})