function signet() {
    return require('../../types/signetConfig');
}

signet['@singleton'] = true;

module.exports = signet;