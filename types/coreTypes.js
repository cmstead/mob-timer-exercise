function coreTypes(signet) {

    signet.alias('objectInstance', 'composite<object, not<null>>');

    signet.alias('objectKey', 'variant<string, number>');
    signet.alias('definedValue', 'not<undefined>');

    signet.alias('index', 'boundedInt<0, Infinity>');

    signet.alias('mobber', 'string')
    signet.alias('mobbers', 'array<mobber>');

    signet.alias('turnTime', 'boundedInt<1, Infinity>');

}

module.exports = coreTypes;