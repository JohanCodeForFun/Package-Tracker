'use strict';



const packages = [
    {
        FirstName: 'John',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 12345678901,
        Delivered: false,
        // how do I update status depending in deliveried true or false?
        isStatus() {return this.Delivered ;}
    },
    {
        FirstName: 'Charlie',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 12345678902,
        Delivered: false
    },
    {
        FirstName: 'Johnny',
        Label: 'Photo frames',
        Status: 'Delivered',
        TrackerID: 12345678903,
        Delivered: true
    },
    {
        FirstName: 'Sandra',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 12345678904,
        Delivered: false
    },
    {
        FirstName: 'Tina',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 12345678905,
        Delivered: false
    },
    {
        FirstName: 'Eva',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 12345678906,
        Delivered: false
    },
    {
        FirstName: 'Anne',
        Label: 'Car accesorie',
        Status: 'Handling...',
        TrackerID: 12345678907,
        Delivered: false
    },
    {
        FirstName: 'Sammy',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 12345678908,
        Delivered: false
    },
    {
        FirstName: 'Johnathan',
        Label: 'Massage kit',
        Status: 'Handling...',
        TrackerID: 12345678909,
        Delivered: false
    }
];

function trackPackage() {
    let input = +document.getElementById('trackerInput').value;
    for (let i = 0; i < packages.length; i++) {
        if (packages[i].TrackerID === input) {
            return console.log(packages[i].FirstName + ', ' +packages[i].Label)
        } 
    } return console.log('package not found');
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