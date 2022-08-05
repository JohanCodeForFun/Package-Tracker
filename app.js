'use strict';

const packages = [
    {
        FirstName: 'John',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 12345678901,
        Delivered: false,
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
        Status: 'Shipped from storage',
        TrackerID: 12345678905,
        Delivered: true
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
        Status: 'Delivered',
        TrackerID: 12345678907,
        Delivered: true
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
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 12345678909,
        Delivered: false
    }
];


function trackPackage(input) {
    input = +document.getElementById('trackerInput').value;

    const filteredPackages = packages.find(x => {
        const id = x.TrackerID.toString();
        const lastFourDigits = id.slice(-4);
        // console.log(lastFourDigits);
        const lastFourDigitsIndex = lastFourDigits.indexOf(input, 0)
        console.log(lastFourDigitsIndex);
        // console.log(lastFourDigits.indexOf(input, 0));


        


        // return lastFourDigits === input;
    });

    if (packages.find(({TrackerID}) => TrackerID === input)) {
        const packageData = packages.find(({TrackerID}) => TrackerID === input);
        document.getElementById('desc').textContent = 'Package details: ';
        document.getElementById('firstName').textContent = 'First name: ' + packageData.FirstName;
        document.getElementById('label').textContent = 'Contents: ' + packageData.Label;
        document.getElementById('status').textContent = 'Status: ' + packageData.Status;
        document.getElementById('delivered').textContent = 'Delivered: ' + packageData.Delivered;
        document.getElementById('trackerID').textContent = 'TrackerID: ' + packageData.TrackerID;
        return packageData;
    } else {
        document.getElementById('desc').textContent = 'Package not found.';
        document.getElementById('firstName').textContent = '';
        document.getElementById('label').textContent = '';
        document.getElementById('status').textContent = 'Try again or contact support for help.';
        document.getElementById('delivered').textContent = '';
        document.getElementById('trackerID').textContent = '';
    }
};

// // practice regex
// let str1 = "God helps those who help themselves";
// let str2 = "You can't expect everyone to like you";
// let num = 121134;
// let testRegex = /help/;
// let testRegex2 = /\d{4}$/
// console.log(testRegex.test(str1)); //returns true
// console.log(testRegex.test(str2)); //returns false
// console.log('last4: ' + testRegex2.test(packages.TrackerID));