// Get all elements with class "nav-item"
var navItems = document.querySelectorAll('.nav-item');

// Filter out elements that have the class "collapse"
var filteredNavItems = Array.from(navItems).filter(function(item) {
  return !item.classList.contains('collapsible');
});

// Now, filteredNavItems contains the elements you want
console.log(filteredNavItems);

filteredNavItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove the "active" class from all elements
        filteredNavItems.forEach(function(item) {
        item.classList.remove('nav-item__active');
        });
    
        // Add the "active" class to the clicked element
        item.classList.add('nav-item__active');
    });
    }
)

// Get all elements with class "collapsible"
var collapsibleElements = document.querySelectorAll('.collapsible');

// Create arrays to store the child elements
var dropdownBtnElements = [];
var navCollapsibleBtnElements = [];

// Loop through each collapsible parent element
collapsibleElements.forEach(function(collapsible) {
  // Get all dropdown elements of the current collapsible parent
  var dropdownBtn = collapsible.querySelectorAll('.dropdown-btn');
  
  // Convert the NodeList to an array and add it to the dropdownBtnElements array
  Array.from(dropdownBtn).forEach(function(btn) {
    dropdownBtnElements.push(btn);
  });

  // Get all navCollapsible elements of the current collapsible parent
  var navCollapsibleBtn = collapsible.querySelectorAll('.nav');
  
  // Convert the NodeList to an array and add it to the navCollapsibleBtnElements array
  Array.from(navCollapsibleBtn).forEach(function(btn) {
    navCollapsibleBtnElements.push(btn);
  });
});

// Now, dropdownBtnElements and navCollapsibleBtnElements contain the elements with parent class "collapsible"
console.log(dropdownBtnElements);
console.log(navCollapsibleBtnElements);

dropdownBtnElements.forEach(function(item) {
    item.addEventListener('click', function() {
        var correspondingNavCollapsible = item.nextElementSibling; // Assuming it's a sibling
        if (!correspondingNavCollapsible) return; // Stop if there is no sibling
        else if (correspondingNavCollapsible.classList.contains('nav-show')){
            correspondingNavCollapsible.classList.remove('nav-show');
        }
        else {
            // Remove the "nav-show" class from all navCollapsibleBtnElements
            navCollapsibleBtnElements.forEach(function(btn) {
            btn.classList.remove('nav-show');
            });
    
            // Add the "nav-show" class to the corresponding navCollapsible element
            if (correspondingNavCollapsible.classList.contains('nav')) {
                correspondingNavCollapsible.classList.add('nav-show');
            }
        }
    });
});


var userDropdownBtn = document.getElementById('user-dropdown');
var userDropdown = document.getElementById('user-menu-content');

userDropdownBtn.addEventListener('click', function() {
    if (!userDropdown.classList.contains('user-menu-show')){
        userDropdown.classList.add('user-menu-show');
    }
    else {
        userDropdown.classList.remove('user-menu-show');
    }
});