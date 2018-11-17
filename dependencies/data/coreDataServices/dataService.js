function dataService(
    storeApi,
    signet
) {

    function get(key) {
        const currentStore = storeApi.readStore();

        return currentStore[key];
    }

    function set(key, value) {
        const currentStore = storeApi.readStore();

        currentStore[key] = value;

        storeApi.writeStore(currentStore);
    }

    return {
        get: signet.enforce('objectKey => *', get),
        set: signet.enforce('objectKey, definedValue => undefined', set)
    };
}

module.exports = dataService;