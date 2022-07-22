'use strict';

// (\d{4})

const testArr = [1234, 1234, 5678, 5678, 7890, 7890];


const includesPackageID = testArr.includes(1234);


console.log('Includes Package ID: ' + includesPackageID);

const trackerRegex = /[0-9§] /;



function trackPackage() {
    // const searchIndex = packages.findIndex((package) => packages.Package1.TrackerID === 1234567890);
    // console.log (`TrackerID is: ${packages[searchIndex].TrackerID}`)
    
    let input = +document.getElementById('trackerInput').value;
    for (i = 0; i < testArr.length; i++) {
        if (packages[i] === input) {
            const findFirstPackage = testArr.find(element => element => input);
            console.log('Your shipment id is: ' + testArr[i]);
            console.log('Your package is: ' + findFirstPackage);
            console.log('label: ' + findFirstPackage);
            console.log('Status: ' + findFirstPackage);
            return;
        }
    }
    console.log('Package not found');
};

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

for (let propertyName in packages.Package1.Delivered) {
    console.log(propertyName);
}

// for (let key in packages) {
//     console.log(key);
//     console.log(packages[key]);
// }

const getTrackerID = function(obj) {
    for (let i = 0; i < packages.length; i++) {

    }
    return Object.values(obj).filter(val => !isNaN(val) &&
        typeof val !== 'boolean');
}

let packadeID = getTrackerID(packages.Package3);
console.log(packadeID);

// packages.forEach(packageCollect => {
//     for (let key in packageCollect) {
//         console.log(`${key}: ${packageCollect[key]}`);
//     }
// });



// // working for each module
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

// const getPackage = packages.Package1.find(pack => packages.Package1.TrackerID === 1234567890);
// console.log('get package: ' + getPackage);



// const findPackage = Array.from(packages.Package9.TrackerID).indexOf(1234567890);
// console.log(findPackage);

// const result = packages.filter(package => package);
// console.log(result);