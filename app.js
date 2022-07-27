'use strict';



const packages = {
    Package1: {
        FirstName: 'John',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 12345678901,
        Delivered: false,
        // how do I update status depending in deliveried true or false?
        isStatus() {return this.Delivered ;}
    },
    Package2: {
        FirstName: 'Charlie',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 12345678902,
        Delivered: false
    },
    Package3: {
        FirstName: 'Johnny',
        Label: 'Photo frames',
        Status: 'Delivered',
        TrackerID: 12345678903,
        Delivered: true
    },
    Package4: {
        FirstName: 'Sandra',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 12345678904,
        Delivered: false
    },
    Package5: {
        FirstName: 'Tina',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 12345678905,
        Delivered: false
    },
    Package6: {
        FirstName: 'Eva',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 12345678906,
        Delivered: false
    },
    Package7: {
        FirstName: 'Anne',
        Label: 'Car accesorie',
        Status: 'Handling...',
        TrackerID: 12345678907,
        Delivered: false
    },
    Package8: {
        FirstName: 'Sammy',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 12345678908,
        Delivered: false
    },
    Package9: {
        FirstName: 'Johnathan',
        Label: 'Massage kit',
        Status: 'Handling...',
        TrackerID: 12345678909,
        Delivered: false
    }
};




// working for each module
// const mobiles = [
//     {
//         brand: 'Samsung',
//         model: 'Galaxy Note 9'
//     },
//     {
//         brand: 'Google',
//         model: 'Pixel 3'
//     },
//     {
//         brand: 'Apple',
//         model: 'iPhone X'
//     }
// ];

// mobiles.forEach(mobile => {
//     for (let key in mobile) {
//         console.log(`${key}: ${mobile[key]}`);
//     }
// });



// Getting data from correct package
// console.log('Getting data from packages>package1>Delivery: ' + packages.Package1.Delivered);
// console.log('Getting data from packages>package2>Delivery: ' + packages.Package2.Delivered);
// console.log('Getting data from packages>package3>Delivery: ' + packages.Package3.Delivered);
// console.log('How do I grab this with a loop?');