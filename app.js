'use strict';

function onLoadStyle() {
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';
}

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-link]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});

const enterDown = document.getElementById('trackerInput');
enterDown.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        trackPackage();
        restartAnimation();
    }
});

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
        FirstName: 'Sophie',
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
    input = document.getElementById('trackerInput').value;

    let StatustextContent = document.getElementById('status');
    let FNtextContent = document.getElementById('firstName');
    let LabeltextContent = document.getElementById('label');
    let TrackerIDtextContent = document.getElementById('trackerID');
    let DeliveredtextContent = document.getElementById('delivered');

    // clear fields between search results
    StatustextContent.textContent = ' ';
    FNtextContent.textContent = ' ';
    LabeltextContent.textContent = ' ';
    TrackerIDtextContent.textContent = ' ';
    DeliveredtextContent.textContent = '';


    const descPackage = document.getElementById('desc')
    descPackage.textContent = 'Searching for your package...';
    descPackage.setAttribute('id', 'play-loading');

    if (input.length === 4) {
        const filteredPackages = packages.find(x => {
            const id = x.TrackerID.toString();
            const lastFourDigits = id.slice(-4);
            return Number(lastFourDigits) === parseInt(input);
        });
        var packageData = filteredPackages;

        setTimeout(() => {
            descPackage.textContent = 'Package details: ';
            descPackage.setAttribute('id', 'desc');
            FNtextContent.textContent = 'First name: ' + packageData.FirstName;
            LabeltextContent.textContent = 'Contents: ' + packageData.Label;
            StatustextContent.textContent = 'Status: ' + packageData.Status;
            DeliveredtextContent.textContent = 'Delivered: ' + packageData.Delivered;
            TrackerIDtextContent.textContent = 'TrackerID: ' + packageData.TrackerID;
        }, 3000);


    } else if (input.length === 11) {
        const FullPackages = packages.find(x => {
            const id = x.TrackerID;
            return id === parseInt(input);
        });
        var packageData = FullPackages;

        setTimeout(() => {
            descPackage.textContent = 'Package details: ';
            descPackage.setAttribute('id', 'desc');
            FNtextContent.textContent = 'First name: ' + packageData.FirstName;
            LabeltextContent.textContent = 'Contents: ' + packageData.Label;
            StatustextContent.textContent = 'Status: ' + packageData.Status;
            DeliveredtextContent.textContent = 'Delivered: ' + packageData.Delivered;
            TrackerIDtextContent.textContent = 'TrackerID: ' + packageData.TrackerID;
        }, 3000);

    } else {
        setTimeout(() => {
            descPackage.textContent = 'Package not found.';
            descPackage.setAttribute('id', 'desc');
            FNtextContent.textContent = '';
            LabeltextContent.textContent = '';
            StatustextContent.textContent = 'Try again or contact support for help.';
            DeliveredtextContent.textContent = '';
            TrackerIDtextContent.textContent = '';
            return;
        }, 3000);
    }
};

const restartButton = document.querySelector('#restartAnimation');
restartButton.addEventListener('click', restartAnimation, false);

function restartAnimation(event) {
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');

    progressBar.style.display = 'block';
    progressContainer.style.display = 'block';

    progressBar.setAttribute('id', 'play-animation');

    setTimeout(() => {
        progressBar.style.display = 'none';
        progressContainer.style.display = 'none';
    }, 3000);
};
