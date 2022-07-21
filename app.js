

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
        if (testArr[i] === input) {
            const findFirstPackage = testArr.find(element => element => input);
            // console.log('Your shipment id is: ' + testArr[i]);
            console.log('Your package is: ' + findFirstPackage);
            console.log('label: ' + findFirstPackage);
            return;
        }
    }
    console.log('value not found');
};

const packages = {
    Package1: {
        FirstName: 'John',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package2: {
        FirstName: 'Charlie',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package3: {
        FirstName: 'Johnny',
        Label: 'Photo frames',
        Status: 'Delivered',
        TrackerID: 1234567890,
        Delivered: true
    },
    Package4: {
        FirstName: 'Sandra',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package5: {
        FirstName: 'Tina',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package6: {
        FirstName: 'Eva',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package7: {
        FirstName: 'Anne',
        Label: 'Car accesorie',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package8: {
        FirstName: 'Sammy',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    },
    Package9: {
        FirstName: 'Johnathan',
        Label: 'Massage kit',
        Status: 'Handling...',
        TrackerID: 1234567890,
        Delivered: false
    }
};

// Getting data from correct package
console.log(packages.Package1.Delivered);
console.log(packages.Package2.Delivered);
console.log(packages.Package3.Delivered);



// const findPackage = Array.from(packages.Package9.TrackerID).indexOf(1234567890);
// console.log(findPackage);

// const result = packages.filter(package => package);
// console.log(result);