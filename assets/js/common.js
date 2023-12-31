var dropdownBtn = document.querySelectorAll(".dropdown");
console.log(dropdownBtn);

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
