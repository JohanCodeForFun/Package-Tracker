'use strict';

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
    input = +document.getElementById('trackerInput').value;

    const filteredPackages = packages.find(x => {
        const id = x.TrackerID.toString();
        const lastFourDigits = id.slice(-4);
        return Number(lastFourDigits) === input;
    });

    let lastFourResult = filteredPackages;

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

    document.getElementById('desc').textContent = 'Package details: ';
    document.getElementById('firstName').textContent = 'First name: ' + lastFourResult.FirstName;
    document.getElementById('label').textContent = 'Contents: ' + lastFourResult.Label;
    document.getElementById('status').textContent = 'Status: ' + lastFourResult.Status;
    document.getElementById('delivered').textContent = 'Delivered: ' + lastFourResult.Delivered;
    document.getElementById('trackerID').textContent = 'TrackerID: ' + lastFourResult.TrackerID;
};
