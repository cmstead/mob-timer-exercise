function turnTimeService(
    dataPropertyKeys,
    dataService,
    signet
) {
    'use strict';
    
    const getTurnTime = () => dataService.get(dataPropertyKeys.turnTime);
    const setTurnTime = (value) => dataService.set(dataPropertyKeys.turnTime, value);

    return {
        getTurnTime: signet.enforce('* => turnTime', getTurnTime),
        setTurnTime: signet.enforce('turnTime => undefined', setTurnTime)
    };
}

module.exports = turnTimeService;