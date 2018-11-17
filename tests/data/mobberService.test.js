'use strict';

const { assert } = require('chai');
const sinon = require('sinon');
const container = require('../../container');

describe('dataService', function () {
    let mobberService;
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

        mobberService = testContainer.build('mobberService');
    });

    describe('getMobbers', function () {
        it('requests and returns an array of mobbers from the dataservice', function () {
            const expectedOutput = ['Mobber 1', 'Mobber 2'];
            responseData.dataToReturn = expectedOutput;

            const result = mobberService.getMobbers();

            assert.equal(dataServiceFake.get.args[0][0], dataPropertyKeys.mobbers);
            assert.equal(JSON.stringify(result), JSON.stringify(expectedOutput));
        });
    });

    describe('setMobbers', function () {
        it('stores a new mobbers array through the data service', function () {
            const dataToBeStored = ['Mobber 1', 'Mobber 2'];

            mobberService.setMobbers(dataToBeStored);

            const storageKey = dataServiceFake.set.args[0][0];
            const storedValue = dataServiceFake.set.args[0][1];

            assert.equal(storageKey, dataPropertyKeys.mobbers);
            assert.equal(JSON.stringify(storedValue), JSON.stringify(dataToBeStored));
        });
    });

    describe('addMobber', function () {
        it('stores a new mobber to the mobbers array', function () {
            const mobberToStore = 'Mobber 3';
            const initialMobberArray = ['Mobber 1', 'Mobber 2'];
            const expectedResult = initialMobberArray.concat([mobberToStore]);

            responseData.dataToReturn = initialMobberArray;

            mobberService.addMobber(mobberToStore);

            const storedData = dataServiceFake.set.args[0][1];

            assert.equal(JSON.stringify(storedData), JSON.stringify(expectedResult));
        });
    });

    describe('removeMobber', function () {
        it('removes a mobber, by index, from the current array of mobbers', function () {
            const mobberToRemove = 'Mad Mobber';
            const expectedResultArray = ['Mobber 1', 'Mobber 2'];

            responseData.dataToReturn = expectedResultArray.slice(0)
            responseData.dataToReturn.splice(1, 0, mobberToRemove);

            mobberService.removeMobber(1);

            const storedData = dataServiceFake.set.args[0][1];

            assert.equal(JSON.stringify(storedData), JSON.stringify(expectedResultArray));
        });
    });

});