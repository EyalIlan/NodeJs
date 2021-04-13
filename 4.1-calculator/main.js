const yargs = require('yargs')



yargs.command({
    command:'add',
    describe:'add 2 number',
    handler: function (args) {
        console.log(args.num1 + args.num2)
    }
})
yargs.command({
    command:'sub',
    describe:'add 2 number',
    handler: function (args) {
        console.log(args.num1 - args.num2)
    }
})
yargs.command({
    command:'mult',
    describe:'add 2 number',
    handler: function (args) {
        console.log(args.num1 * args.num2)
    }
})
yargs.command({
    command:'pow',
    describe:'add 2 number',
    handler: function (args) {
        console.log(Math.pow(args.num1,args.num2))
    }
})



yargs.argv

