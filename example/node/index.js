

const run = () => {
    console.log('Example Node is running');

    const {getOperator} = require("../../dist/noTelp");

    const telp1 = '08123456789';
    console.log('Telp 1 : ' + telp1);
    console.log('Telp 1 is ', getOperator(telp1));
    console.log('\n==========\n');

    const telp2 = '+628567898765';
    console.log('Telp 2 : ' + telp2);
    console.log('Telp 2 is ', getOperator(telp2));
    console.log('\n==========\n');

    const telp3 = '02123405';
    console.log('Telp 3 : ' + telp3);
    console.log('Telp 3 is ', getOperator(telp3));
    console.log('\n==========\n');
}

run();