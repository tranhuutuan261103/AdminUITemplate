var dropdownBtn = document.querySelectorAll(".dropdown");
// console.log(dropdownBtn);

if (dropdownBtn) {
    dropdownBtn.forEach(function (item) {
        try {
            item.addEventListener('click', function () {
                if (item.classList.contains('dropdown-content-show')) {
                    item.classList.remove('dropdown-content-show');
                }
                else {
                    item.classList.add('dropdown-content-show');
                }
            }
            );
        } catch (error) {
            console.log(error);
        }
    });
}

$(document).ready(function () {
    // Lấy tất cả các mục dropdown-item trong dropdown-content
    var dropdownItems = $(".dropdown-content .dropdown-item");

    // Đặt sự kiện click cho mỗi mục
    dropdownItems.click(function () {
        // Lấy nội dung của mục đã chọn
        var selectedText = $(this).text();
        var selectedValue = $(this).attr("data-value");

        // Cập nhật nội dung trong thẻ có class "selected"
        $(".selected").text(selectedText);
        $(".selected").attr("data-value", selectedValue);
    });
});

// Pagination
// var pagination = document.querySelectorAll(".pagination");
// console.log(pagination);

// var paginationItem = document.querySelectorAll(".page-item");

// paginationItem.forEach(function (item) {
//     item.addEventListener('click', function () {
//         paginationItem.forEach(function (item) {
//             item.classList.remove('page-item--active');
//         });
//         item.classList.add('page-item--active');
//     });
// });


// Reset form

var resetBtn = document.querySelectorAll(".reset-btn");
console.log(resetBtn);

if (resetBtn) {
    resetBtn.forEach(function (item) {
        try {
            item.addEventListener('click', function () {
                var form = item.closest('form');
                form.reset();
            }
            );
        } catch (error) {
            console.log(error);
        }
    });
}

// Dialog event
var dialog = document.getElementsByClassName("modal-dialog");
console.log(dialog);

var dialogCancelBtn = document.querySelectorAll(".cancel-btn");

if (dialogCancelBtn) {
    dialogCancelBtn.forEach(function (item) {
        try {
            item.addEventListener('click', function () {
                var dialog = item.closest('.modal-dialog');
                dialog.classList.remove('modal-dialog--active');
            }
            );
        } catch (error) {
            console.log(error);
        }
    });
}