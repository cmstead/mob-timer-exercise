function mobberService(
    dataPropertyKeys,
    dataService,
    signet
) {
    'use strict';

    const getMobbers = () => dataService.get(dataPropertyKeys.mobbers);
    const setMobbers = (mobbers) => dataService.set(dataPropertyKeys.mobbers, mobbers);

    function addMobber(name) {
        let mobbers = getMobbers();
        mobbers.push(name);

        dataService.setMobbers(mobbers);
    }

    function removeMobber(index) {
        let mobbers = getMobbers()
        mobbers.splice(index, 1);

        dataService.setMobbers(mobbers);
    }


    return {
        getMobbers: signet.enforce('* => mobbers', getMobbers),
        setMobbers: signet.enforce('mobbers => undefined', setMobbers),

        addMobber: signet.enforce('mobber => undefined', addMobber),
        removeMobber: signet.enforce('index => undefined', removeMobber)
    };
}

module.exports = mobberService;