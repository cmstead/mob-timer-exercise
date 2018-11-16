function coreTypes(signet) {

    signet.alias('index', 'boundedInt<0, Infinity>');

    signet.alias('mobber', 'string')
    signet.alias('mobbers', 'array<mobber>');

}

module.exports = coreTypes;