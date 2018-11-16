function turnTimeService(
    dataPropertyKeys,
    dataService
) {
    'use strict';
    
    const getTurnTime = () => dataService.get(dataPropertyKeys.turnTime);
    const setTurnTime = (value) => dataService.set(dataPropertyKeys.turnTime, value);

    return {
        getTurnTime: getTurnTime,
        setTurnTime: setTurnTime
    };
}

module.exports = turnTimeService;