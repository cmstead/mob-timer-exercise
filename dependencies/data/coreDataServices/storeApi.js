function storeApi(
    fs,
    path
) {

    const storeLocation = path.join(__dirname, 'dataStore', 'dataStore.json');

    function readStore() {
        return require(storeLocation);
    }

    function writeStore(data) {
        fs.writeFileSync(storeLocation, JSON.stringify(data, null, 4));
    }

    return {
        readStore: readStore,
        writeStore: writeStore
    };
}

module.exports = storeApi;