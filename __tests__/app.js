'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-react-native-container:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments('TestContainer')
      .withPrompts({ shouldCreate: true });
  });

  it('creates files', () => {
    assert.file([
      'TestContainer/Component.js',
      'TestContainer/Container.js',
      'TestContainer/index.js'
    ]);
  });
});
