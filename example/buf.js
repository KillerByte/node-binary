var buf = new Buffer([ 97, 98, 99, 100, 101, 102, 84, 101, 115, 116, 0 ]);

var binary = require('binary');
binary(buf)
    .word16ls('ab')
    .word32bu('cf')
    .string('s', 4)
    .word8('x')
    .tap(function (vars) {
        console.dir(vars);
    })
;
