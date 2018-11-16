function dataService(
    storeApi
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
        get: get,
        set: set
    };
}

module.exports = dataService;