'use strict';

const { assert } = require('chai');
const sinon = require('sinon');
const container = require('../../../container');

describe('dataService', function () {
    let dataService;
    let storeApiFake;
    let dataStore;

    beforeEach(function () {
        const testContainer = container.new();

        dataStore = {};

        storeApiFake = {
            readStore: function () {
                return dataStore;
            },
            writeStore: sinon.spy()
        };

        testContainer.register(() => storeApiFake, 'storeApi');

        dataService = testContainer.build('dataService');
    });

    describe('get', function () {
        it('gets a property from the data store by key name', function () {
            const testKey = 'testKey';

            dataStore[testKey] = 'This is the test value';

            const storedData = dataService.get(testKey);

            assert.equal(storedData, dataStore[testKey]);
        });
    });

    describe('set', function () {
        it('writes a value to the data store assigned to user-provided key', function () {
            const testKey = 'testKey';
            const valueToWrite = 'A new value';

            dataService.set(testKey, valueToWrite);

            assert.equal(dataStore[testKey], valueToWrite);
        });
    });
});