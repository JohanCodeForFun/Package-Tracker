

// (\d{4})

const testArr = [1234, 1234, 5678, 5678, 7890, 7890];

const trackerRegex = /[0-9§] /;

function trackPackage() {
    let input = +document.getElementById('trackerInput').value;
    for (i = 0; i < testArr.length; i++) {
        if (testArr[i] === input) {
            console.log(testArr[i]);
            return;
        }
    }
    console.log(testArr);
    console.log('value not found');
};

const packages = {
    Package1: {
        FirstName: 'John',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package2: {
        FirstName: 'Charlie',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package3: {
        FirstName: 'Johnny',
        Label: 'Photo frames',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package4: {
        FirstName: 'Sandra',
        Label: 'Toys 4 kids',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package5: {
        FirstName: 'Tina',
        Label: 'Plush toy',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package6: {
        FirstName: 'Eva',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package7: {
        FirstName: 'Anne',
        Label: 'Car accesorie',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package8: {
        FirstName: 'Sammy',
        Label: 'Books',
        Status: 'Handling...',
        TrackerID: 1234567890
    },
    Package9: {
        FirstName: 'Johnathan',
        Label: 'Massage kit',
        Status: 'Handling...',
        TrackerID: 1234567890
    }
};