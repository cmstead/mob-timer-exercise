'use strict';

const { assert } = require('chai');
const sinon = require('sinon');
const container = require('../../container');

describe('dataService', function () {
    let turnTimeService;
    let dataServiceFake;
    let responseData;
    let dataPropertyKeys;

    beforeEach(function () {
        const testContainer = container.new();

        dataPropertyKeys = testContainer.build('dataPropertyKeys');

        responseData = {
            dataToReturn: []
        };

        dataServiceFake = {
            get: sinon.spy(function () {
                return responseData.dataToReturn;
            }),
            set: sinon.spy()
        };

        testContainer.register(() => dataServiceFake, 'dataService');

        turnTimeService = testContainer.build('turnTimeService');
    });

    describe('getTurnTime', function () {
        it('requests and returns stored turn time from the dataservice', function () {
            const expectedOutput = 180;
            responseData.dataToReturn = expectedOutput;

            const result = turnTimeService.getTurnTime();

            assert.equal(dataServiceFake.get.args[0][0], dataPropertyKeys.turnTime);
            assert.equal(result, expectedOutput);
        });
    });

    describe('setTurnTime', function () {
        it('stores a new turn time through the data service', function () {
            const dataToBeStored = 300;

            turnTimeService.setTurnTime(dataToBeStored);

            const storageKey = dataServiceFake.set.args[0][0];
            const storedValue = dataServiceFake.set.args[0][1];

            assert.equal(storageKey, dataPropertyKeys.turnTime);
            assert.equal(storedValue, dataToBeStored);
        });
    });


});