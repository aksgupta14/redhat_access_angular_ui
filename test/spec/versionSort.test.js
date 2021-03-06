'use strict';

var utils = require('../../app/shared/utils');
var versionSort = utils.versionSort;

describe('Version Sort', function () {
  it('should pass for RHEL', function () {
    const unsorted = ["4 - ELP", "5 - ELS", "5.1", "5.10", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "6.0", "6.1", "6.10", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "7.0", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "8.0 Beta"]

    const sorted = ["8.0 Beta", "7.6", "7.5", "7.4", "7.3", "7.2", "7.1", "7.0", "6.10", "6.9", "6.8", "6.7", "6.6", "6.5", "6.4", "6.3", "6.2", "6.1", "6.0", "5.10", "5.9", "5.8", "5.7", "5.6", "5.5", "5.4", "5.3", "5.2", "5.1", "5 - ELS", "4 - ELP"]

    expect(versionSort(unsorted)).toEqual(sorted);
  });

  it('should pass for JBOSS', function () {
    const unsorted = ["4.3.0.GA", "4.3.0.GA_CP01", "4.3.0.GA_CP02", "4.3.0.GA_CP02_FP01", "4.3.0.GA_CP03", "4.3.0.GA_CP03_FP01", "4.3.0.GA_CP04", "4.3.0.GA_CP04_FP01", "4.3.0.GA_CP05", "4.3.0.GA_CP05_FP01", "4.3.0.GA_CP06", "4.3.0.GA_CP07", "4.3.0.GA_CP08", "4.3.0.GA_CP09", "4.3.0.GA_CP10", "5.0.0", "5.0.1", "5.1.0", "5.1.1", "5.1.2", "5.2.0", "6.0.0", "6.0.1", "6.1.0", "6.1.1", "6.2.0", "6.2.1", "6.2.2", "6.2.3", "6.2.4", "6.3.0", "6.3.1", "6.3.2", "6.3.3", "6.4.0", "6.4.1", "6.4.10", "6.4.11", "6.4.12", "6.4.13", "6.4.14", "6.4.15", "6.4.16", "6.4.17", "6.4.18", "6.4.19", "6.4.2", "6.4.20", "6.4.21", "6.4.3", "6.4.4", "6.4.5", "6.4.6", "6.4.7", "6.4.8", "6.4.9", "7.0.0", "7.0.1", "7.0.2", "7.0.3", "7.0.4", "7.0.5", "7.0.6", "7.0.7", "7.0.8", "7.0.9", "7.1.0", "7.1.1", "7.1.2", "7.1.3", "7.1.4"]
    const sorted = ["7.1.4", "7.1.3", "7.1.2", "7.1.1", "7.1.0", "7.0.9", "7.0.8", "7.0.7", "7.0.6", "7.0.5", "7.0.4", "7.0.3", "7.0.2", "7.0.1", "7.0.0", "6.4.21", "6.4.20", "6.4.19", "6.4.18", "6.4.17", "6.4.16", "6.4.15", "6.4.14", "6.4.13", "6.4.12", "6.4.11", "6.4.10", "6.4.9", "6.4.8", "6.4.7", "6.4.6", "6.4.5", "6.4.4", "6.4.3", "6.4.2", "6.4.1", "6.4.0", "6.3.3", "6.3.2", "6.3.1", "6.3.0", "6.2.4", "6.2.3", "6.2.2", "6.2.1", "6.2.0", "6.1.1", "6.1.0", "6.0.1", "6.0.0", "5.2.0", "5.1.2", "5.1.1", "5.1.0", "5.0.1", "5.0.0", "4.3.0.GA_CP10", "4.3.0.GA_CP09", "4.3.0.GA_CP08", "4.3.0.GA_CP07", "4.3.0.GA_CP06", "4.3.0.GA_CP05_FP01", "4.3.0.GA_CP05", "4.3.0.GA_CP04_FP01", "4.3.0.GA_CP04", "4.3.0.GA_CP03_FP01", "4.3.0.GA_CP03", "4.3.0.GA_CP02_FP01", "4.3.0.GA_CP02", "4.3.0.GA_CP01", "4.3.0.GA"]
    expect(versionSort(unsorted)).toEqual(sorted);
  });

  it('should pass for Satellite', function () {
    const unsorted = ["1.1", "1.1.1", "2.1", "2.9", "2.99", "3.2", "3.4", "3.5", "3.6", "3.7", "4", "4.0", "4.0.6", "4.1", "4.1.6", "4.2", "4.2.3", "5", "5.0", "5.0.2", "5.1", "5.1.1", "5.2", "5.2.1", "5.3", "5.4", "5.4.1", "5.5", "5.6", "5.7", "5.8", "6.0", "6.1", "6.2", "6.3", "6.4"];

    const sorted = ["6.4", "6.3", "6.2", "6.1", "6.0", "5.8", "5.7", "5.6", "5.5", "5.4.1", "5.4", "5.3", "5.2.1", "5.2", "5.1.1", "5.1", "5.0.2", "5.0", "5", "4.2.3", "4.2", "4.1.6", "4.1", "4.0.6", "4.0", "4", "3.7", "3.6", "3.5", "3.4", "3.2", "2.99", "2.9", "2.1", "1.1.1", "1.1"];
    expect(versionSort(unsorted)).toEqual(sorted);
  });

  it('should pass for .NET core', function () {
    const unsorted = ["6.0.0", "6.1.0", "6.1.1", "6.1.2", "6.1.3", "6.1.4", "6.2.0", "6.2.1", "6.2.2", "6.2.3", "6.2.4", "6.2.5", "6.2.6", "6.2.7", "6.2.8", "6.2.9", "6.3.0", "6.3.1", "6.3.2", "6.3.4", "6.3.5", "6.3.6", "6.3.7", "6.3.8", "6.4.0", "6.4.1", "6.4.2", "6.4.3"]
    const sorted = ["6.4.3", "6.4.2", "6.4.1", "6.4.0", "6.3.8", "6.3.7", "6.3.6", "6.3.5", "6.3.4", "6.3.2", "6.3.1", "6.3.0", "6.2.9", "6.2.8", "6.2.7", "6.2.6", "6.2.5", "6.2.4", "6.2.3", "6.2.2", "6.2.1", "6.2.0", "6.1.4", "6.1.3", "6.1.2", "6.1.1", "6.1.0", "6.0.0"];
    expect(versionSort(unsorted)).toEqual(sorted);
  });

  it('should pass for Ansible Tower', function () {
    const unsorted = ["3.1.4", "3.1.5", "3.1.6", "3.1.7", "3.2", "3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6", "3.3"];
    const sorted = ["3.3", "3.2.6", "3.2.5", "3.2.4", "3.2.3", "3.2.2", "3.2.1", "3.2", "3.1.7", "3.1.6", "3.1.5", "3.1.4"];
    expect(versionSort(unsorted)).toEqual(sorted);
  });










});
