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
        document.getElementById('status').textContent = 'Try again or contact support for help.';
    }
};