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

var cssLink;

$(document).ready(function () {
    // Sử dụng sự kiện click cho liên kết "Home"
    $(".load-target").click(function (e) {
        e.preventDefault(); // Ngăn chặn mặc định hành vi điều hướng của liên kết

        // Lấy giá trị của thuộc tính myTarget từ liên kết
        var pageTarget = $(this).attr("href");
        var cssTarget = $(this).attr("cref");
        
        // Kiểm tra giá trị thuộc tính myTarget và thực hiện xử lý tương ứng
        if (!pageTarget || pageTarget === "#" || pageTarget === "" || cssTarget === "#" || cssTarget === "" || !cssTarget) {
            return; // Không làm gì cả nếu giá trị thuộc tính là rỗng
        }
        else {
            loadPage(pageTarget, cssTarget);
        }
    });
});

function loadPage(page, css) {
    if (cssLink) {
        cssLink.remove();
    }

    // Sử dụng jQuery's .load() để tải nội dung #main-content
    $("#main-content").load(page);

    // Kiểm tra xem file css đã được load chưa
    var listCss = css.split(" ");
    listCss.forEach(function (item) {
        checkEsixtCss(item);
        loadCss(item);
    });
}

function checkEsixtCss(css) {
    var cssLink = document.getElementsByClassName("cssLink");
    console.log(cssLink);
    if (cssLink) {
        for (var i = 0; i < cssLink.length; i++) {
            console.log(cssLink[i].href + " " + css);
            if ((cssLink[i].href).includes(removeLeadingDot(css))) {
                return true;
            }
        }
    }
    return false;
}

function loadCss(css) {
    // Tạo một thẻ <link> để thêm file CSS vào phần head
    var cssLink = document.createElement("link");
    cssLink.setAttribute("rel", "stylesheet");
    cssLink.setAttribute("type", "text/css");
    cssLink.setAttribute("class", "cssLink");
    cssLink.setAttribute("href", css);

    // Chèn thẻ <link> vào phần head
    $("head").append(cssLink);
}

function removeLeadingDot(inputString) {
    // Kiểm tra xem chuỗi có bắt đầu bằng dấu chấm hay không
    if (inputString.startsWith(".")) {
        // Nếu có, loại bỏ dấu chấm ở đầu bằng cách sử dụng slice(1)
        return inputString.slice(1);
    } else {
        // Nếu không, trả về chuỗi ban đầu
        return inputString;
    }
}

// Header nav toggle click

var headerNavBtn = document.getElementById('header-nav-toggle');

headerNavBtn.addEventListener('click', function() {
    var headerNav = document.getElementById('sidebar');
    if (!headerNav.classList.contains('sidebar--hidden')){
        headerNav.classList.add('sidebar--hidden');
    }
    else {
        headerNav.classList.remove('sidebar--hidden');
    }

    var pageContent = document.getElementById('page-content');
    if (!pageContent.classList.contains('sidebar--hidden')){
        pageContent.classList.add('sidebar--hidden');
    }
    else {
        pageContent.classList.remove('sidebar--hidden');
    }
});