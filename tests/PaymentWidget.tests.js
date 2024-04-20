/* global beforeEach afterEach */
import { describe } from 'mocha';
import { PaymentWidget } from '../lib/index.js';

describe('PaymentWidget', function () {
  let tool;

  beforeEach(function () {
    tool = new PaymentWidget({});
  });

  afterEach(function () {
    tool = null;
  });
  console.log(tool);

  describe('tests', function () {});
});
