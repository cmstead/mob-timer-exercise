function coreTypes(signet) {

    signet.alias('objectKey', 'variant<string, number>');
    signet.alias('definedValue', 'not<undefined>');

    signet.alias('index', 'boundedInt<0, Infinity>');

    signet.alias('mobber', 'string')
    signet.alias('mobbers', 'array<mobber>');

}

module.exports = coreTypes;