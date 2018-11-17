function storeApi(
    fs,
    path,
    signet
) {

    const storeLocation = path.join(__dirname, 'dataStore', 'dataStore.json');

    function readStore() {
        return require(storeLocation);
    }

    function writeStore(data) {
        fs.writeFileSync(storeLocation, JSON.stringify(data, null, 4));
    }

    return {
        readStore: signet.enforce('* => objectInstance', readStore),
        writeStore: signet.enforce('objectInstance => undefined', writeStore)
    };
}

module.exports = storeApi;