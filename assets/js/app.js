// scroll header

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY >= 20)
        header.classList.add('sticky');
    else if (window.scrollY < 19) {
        header.classList.remove('sticky');
        // header.classList.add('fadeBlock');
    }

});

// btn nav
var colapse = document.querySelector('.header__btn-colapse');
var btnColapse = document.getElementById("nav-btn-colapse");
var header = document.querySelector('.header__colapse');
var menuOpen = false;
header.addEventListener('click', function(e){   
    if (document.querySelector('.header__colapse').contains(e.target)){
        btnColapse.classList.remove('open');
        menuOpen = false;
        header.classList.remove('hide');
    }
});
colapse.onclick = function () {

    if (!menuOpen) {
        btnColapse.classList.add('open');
        menuOpen = true;
        header.classList.add('hide');
    } else {
        btnColapse.classList.remove('open');
        menuOpen = false;
        header.classList.remove('hide');

    }

}




$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            nav: true
        },
        992: {
            items: 4,
            nav: true
        },
        1200: {
            items: 6,
            nav: true
        }
    }
})


// điều hướng

// data products 10 sản phẩm thôi

var dataProducts = [
    {
        id: "item-1",
        name: "(Mẫu HOT) Túi kẹp nách nữ vải dù dây xích KR 323- Chất Dù cao cấp, Size 24, 3 màu lựa chọn- KARA 323",
        url: "../assets/img/items/item-1.jpg",
        price: 149000,
        describe1: "Túi Xách Nữ Thời Trang 💖FREESHIP 50k💖 Túi Xách Nữ Đeo Chéo Dây Da Baniclassic Trẻ trung Chất Cực Đẹp TX04",
        describe2: "Túi Kẹp nách nữ có kích thước: Dài 24 cm, Rộng 5 cm,  Cao 14 cm",
        describe3: "Túi Kẹp nách nữ Với 3 màu Hot (Trắng , Đen,  Vàng) được cách điệu cho tạo form  dáng hiện đại, trẻ trung",
        orderQty: 1
    },
    {
        id: "item-2",
        name: "(Mẫu HOT) Túi kẹp nách nữ vải dù dây xích KR 323- Chất Dù cao cấp, Size 24, 3 màu lựa chọn- KARA 323",
        url: "../assets/img/items/item-2.jpg",
        price: 249000,
        describe1: "TÚI ĐEO CHÉO QUẢNG CHÂU⚜️",
        describe2: "Từ những cô nàng bình thường nhất cho tới những ngôi sao hàng đầu, tất cả đều chia sẻ một tình yêu vĩ đại với TÚI XÁCH NỮ ĐẸP của mình TÚI XÁCH NỮ hợp dáng người, hợp màu sắc làm tăng vẻ đẹp của trang phục bạn mặc và khẳng định ấn tượng của bạn trong mắt người đối diện. Tuy nhiên, không phải ai cũng biết chọn một chiếc TÚI XÁCH NỮ DA PU thực sự phù hợp với phom cơ thể của mình. Mang tới cho các cô nàng sự thoải mái khi đi dạo phố hoặc hẹn hò bè bạn vì không phải cầm mang những vật dụng linh tinh,",
        describe3: "chiếc TÚI XÁCH NỮ DA ĐẸP đã trở thành người bạn không thể thiếu các nàng. Chúng có sự đa dạng từ kiểu cách tới màu sắc, size…tùy theo nhu cầu của mình mà các nàng lựa chọn một sản phẩm thích hợp. Và nếu bạn cũng đang đi tìm một chiếc ví thể thể hiện được cá tính của bản thân một cách rõ nét nhất và đang... lạc lối, thì hãy cùng khám phá và cảm nhận những nét đẹp và quyến rũ của Túi Xách nữ da lộn mà Túi Xách Nữ ZABUZA cung cấp nhé.",
        orderQty: 2
    },
    {
        id: "item-3",
        name: "Túi Kẹp Nách Nữ Túi Đeo Chéo Nữ Vintage Hottrend KR 180- 2 Màu Lựa chọn, Chất liệu cao cấp, Có 2 Dây- KARA 180",
        url: "../assets/img/items/item-3.jpg",
        price: 349000,
        describe1: "KARA Shop xin gửi quý khách sản phẩm HOT: Túi kẹp nách nữ vải dù dây xích KR 323- Chất Dù cao cấp, Size 24, 3 màu lựa chọn- KARA 323",
        describe2: "Túi Kẹp nách nữ có kích thước: Dài 24 cm, Rộng 5 cm,  Cao 14 cm",
        describe3: "Túi Kẹp nách nữ Với 3 màu Hot (Trắng , Đen,  Vàng) được cách điệu cho tạo form  dáng hiện đại, trẻ trung",
        orderQty: 1
    },
    {
        id: "item-4",
        name: "(Hottrend) Túi kẹp nách nữ vải dù cao cấp KR 274- Chất Dù cao cấp, Size 24, 4 màu lựa chọn- KARA 274",
        url: "../assets/img/items/item-4.jpg",
        price: 139000,
        describe1: "KARA Shop xin gửi quý khách sản phẩm HOT: Túi kẹp nách nữ vải dù cao cấp KR 274- Chất Dù cao cấp, Size 24, 4 màu lựa chọn- KARA 274",
        describe2: "Túi Kẹp nách nữ có kích thước: Dài 24 cm, Rộng 5 cm,  Cao 14 cm",
        describe3: "Túi Kẹp nách nữ Với 4 màu Hot (Trắng , Đen, Xanh Dương, Vàng) được cách điệu cho tạo form  dáng hiện đại, trẻ trung",
        orderQty: 3
    },
    {
        id: "item-5",
        name: "(HOT) Túi Kẹp Nách Nữ Caro Vintage Hottrend KR 180- 7 Màu Lựa chọn, Chất liệu cao cấp, Có 2 Dây- KARA 180",
        url: "../assets/img/items/item-5.jpg",
        price: 259000,
        describe1: "KARA Shop xin gửi quý khách sản phẩm HOT: Túi Kẹp Nách Nữ Caro Vintage Hottrend KR 180- 7 Màu Lựa chọn, Chất liệu cao cấp, Có 2 Dây- KARA 180",
        describe2: "Túi Kẹp nách nữ có kích thước: Dài 24 cm, Rộng 5 cm,  Cao 14 cmTúi Kẹp nách nữ có kích thước: Dài 26 cm, Rộng 6 cm,  Cao 14 cm",
        describe3: "Túi Kẹp nách nữ Với 7 màu Hot (Trắng Caro, Xanh Caro, Đỏ Caro, Xám Caro, Tím Hồng, Vàng Xanh, Đen Xanh) được cách điệu cho tạo form  dáng hiện đại, trẻ trung",
        orderQty: 1
    },
    {
        id: "item-6",
        name: "[Mã FAMAYWA giảm 10k đơn từ 50k] Túi xách nữ, túi kẹp nách da mềm trơn BH 433",
        url: "../assets/img/items/item-6.jpg",
        price: 299000,
        describe1: "Túi xách là một phụ kiện thời trang không thể thiếu của các bạn trẻ dù là nam hay nữ, nó thể hiện phong cách cũng như cá tính của chủ nhân.",
        describe2: "Nếu bạn yêu thích phong cách đơn giản nhưng tinh tế thì chiếc túi xách  là một lựa chọn hoàn hảo cho bạn.Chiếc túi xách Tote 6 sở hữu thiết kế thời trang với phần nắp túi cách điệu kết hợp tông màu nổi bật, những đường may tinh tế, cùng gam màu trung tính trẻ trung năng động sẽ vô cùng hữu dụng cho bạn trong việc chứa các vật dụng cá nhân.",
        describe3: " Bên cạnh đó, túi xách còn thể hiện gu thời trang và cá tính của bạn.",
        orderQty: 2
    },
    {
        id: "item-7",
        name: "Túi Cói Merci",
        url: "../assets/img/items/item-7.jpg",
        price: 599000,
        describe1: "Túi Cói Merci - nhỏ nhỏ xinh xinh nhưng tiện vô cùng . Sống ảo cũng xinh lung linhh ✨✨🔥🔥 ",
        describe2:
            "Để mà đi du lịch sống ảo k thể thiếu em túi này lun ý ce ạ 🤩" +
            "TÚI CÓI MERCI  hot hit 🌴🌴🌴" +
            "Túi rộng tha hồ đựng đồ nha ce",
        describe3: "Size loại 1: 35x36cm" +
            "size loại 2: 32x35cm,đựng vừa A4, vừa laptop, đi học đi làm , du lịch , còn hợp vs ai bỉm sữa mà vẫn muốn trend :))" +
            "Túi rất nhẹ gập gọn cất cốp được, sống ảo xịn sò luôn nha 😌😌"
        ,
        orderQty: 3
    },
    {
        id: "item-8",
        name: "TÚI XÁCH NỮ 2 NGĂN PHỐI NƠ KIỂU DÁNG HÀN QUỐC CỰC ĐẸP SL15",
        url: "../assets/img/items/item-8.jpg",
        price: 679000,
        describe1: "--- TÚI XÁCH ALISA ---" +
            " [HÀNG MỚI VỀ] TÚI XÁCH NỮ 2 NGĂN PHỐI NƠ KIỂU DÁNG HÀN QUỐC CỰC ĐẸP" +
            "---Đặc Điểm Nổi Bật----" +
            " - Trẻ trung phong cách " +
            " - Thiết kế mới 2019" +
            "- Họa tiết trái tim, thắt nơ siêu xinh",
        describe2: "Túi nữ 2 Ngăn Phối Nơ  Phiên Bản Hàn Quốc",
        describe3:
            "----Thông Tin Chi Tiết----" +
            "- Chất Liệu: Da pu cao cấp mềm mịn" +
            "- Màu sắc: , hồng" +
            "- Kích thước:19*15*8*15cm" +
            "- Phong Cách : Hàn Quốc" +
            "- Công dụng:đi chơi , đi làm , đi học , đi du lịch…." +
            "-màu sắc: màu hồng" +
            "- Mix Đồ: Có Thể kết hợp với mọi trang phục khác nhau",
        orderQty: 1
    },
    {
        id: "item-9",
        name: "Túi Xách Nữ Tote Da PU Cao Cấp Mềm Đẹp Phom Vuông Kèm Ví Nhỏ Xinh Có Dây Đeo Chéo Style Thời Trang Công Sở Đi Làm Đi Học",
        url: "../assets/img/items/item-9.jpg",
        price: 238000,
        describe1: "Sức nóng của túi tote da chưa bao giờ hạ nhiệt trong giới trẻ sành mốt bởi tính tiện dụng, sang trọng, mà vô cùng cá tính. Combo túi ví tote da Pu dày đẹp với thiết kế tinh tế đem đến phong cách thời trang sành điệu cho các nàng khi đi học, đi làm hay đi chơi.",
        describe2: "Túi Kẹp nách nữ có kích thước: Dài 24 cm, Rộng 5 cm,  Cao 14 cm",
        describe3: "Túi Kẹp nách nữ Với 3 màu Hot (Trắng , Đen,  Vàng) được cách điệu cho tạo form  dáng hiện đại, trẻ trung",
        orderQty: 2
    },
    {
        id: "item-10",
        name: "Túi xách tay nữ thương hiệu NEVENKA phong cách trẻ trung thanh lịch N9291",
        url: "../assets/img/items/item-10.jpg",
        price: 238000,
        describe1: "Phong cách: trẻ trung, thanh lịch Kiểu cách: Túi đeo vai, đeo chéo nữ, túi xách tay thời trang Vật liệu chính: Da Pu Vật liệu dây đeo: Dây da PU Bề mặt da: Da trơn",
        describe2: "Công nghệ vật liệu: Da nhân tạo Vật liệu lót: PVC Hình dáng: Hình chữ nhật ngang Kích thước: 23 x 16 x 10 cm Kiểu khóa: Khóa kéo miệng túi Màu sắc: Xanh, Trắng , Đen",
        describe3: "Thương hiệu: NEVENKA Xuất xứ: Trung Quốc Phù hợp sử dụng: Đi chơi, đi làm, đi dạo phố.....",
        orderQty: 2
    }
];

// data user
//  danh sách giỏ hàng mặc định
danhsachGioHang = [{ id: "item-1", n: 3 },
{ id: "item-2", n: 1 },
{ id: "item-6", n: 2 }];

var users = [{
    username: "admin",
    password: "admin",
    productID: danhsachGioHang
}]
// data cart
function saveListUser() {
    var list = JSON.parse(localStorage.getItem("listUser"));
    if (list)
        users = list;
}
saveListUser();

function Redirect(url) {
    window.location = url;
}

// tạo hàm đăng ký


function checkLogin() {
    var user = JSON.parse(localStorage.getItem("userLogin"));
    var names = document.querySelectorAll(".user-name");
    var logout = document.getElementsByClassName("logout");
    var hasUser = document.querySelector('.user');
    if (user) {
        for (var name of names) {
            name.innerHTML = `
                <a class="text-danger" href="../pages/login.html">${user.username}</a>
            `;
        }
        if (logout[0].textContent == "Đăng nhập")
            logout[0].textContent = "Đăng xuất";
        hasUser.classList.add("user-has-account");
        return user;
    }
    logout[0].textContent = "Đăng nhập";

    hasUser.classList.remove("user-has-account");
    return "";
}

var bool = Boolean(checkLogin());
var userNow = checkLogin();
console.log(bool);

// logout
function Logout() {
    var logouts = document.getElementsByClassName("logout");
    for (var logout of logouts) {
        logout.onclick = () => {
            localStorage.removeItem("userLogin");
        }
    }
}

Logout();

var i = 0;
// thêm sản phẩm
function addRow(product, index) {
    var table = document.getElementById("datarow");

    var row = `
    <tr>
        <td class="text-center" >${++i}</td>
        <td class="text-center" >
            <img src="${product.url}" class="img-product">
        </td>
        <td class="text-center" >${product.name}</td>
        <td class="text-center">${product.price}</td>
        <td class="text-center d-flex justify-content-center">
            <input style="width: 45px; border: none; outline: none;" type="number" 
            class="d-block" name="number" id="number" value="${product.orderQty}" onchange ="totalPrice();" min="1">
        </td>
        <td class="text-center">${product.price * product.orderQty}</td>
        <td class="text-center">
            <a id="${product.id}" class="btn btn-danger btn-delete-sanpham">
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa
            </a>
        </td>
    </tr>
`;
    var newRow = table.insertRow(table.length);
    newRow.innerHTML = row;
}
// xoa 1 item carrt
var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function deleteItemInCart(productID) {
    removeByAttr(userNow.productID, "id", productID);
    var userLogin = userNow;
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
}
// khi thay đổi số lượng sản phẩm
function whenChageQty(){
    var numbers = document.querySelectorAll("#datarow #number");
    var products = userNow.productID;
    for(var number in numbers){
        if(numbers.hasOwnProperty(number)){
            products[number].n = numbers[number].value;
            // console.log(numbers[number].value);
        }
    }
    var userLogin = userNow;
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
}

// tổng giá 
var totalPrice = function () {
    var table = document.getElementById("datarow");
    var deletes = document.querySelectorAll(".btn-delete-sanpham");
    var totalPr = 0;
    for (var i = 0; i < table.rows.length; ++i) {
        var quantity = table.rows[i].cells[4].querySelector("input").value;
        var price = table.rows[i].cells[3].innerText;
        var total = quantity * price;
        table.rows[i].cells[5].innerText = total;
        totalPr += total;
        deletes[i].onclick = () => {
            table.deleteRow(--i);
            totalPrice();
            deleteItemInCart(deletes[i].id);
        }
    }
    document.getElementById("totalPrice").innerText = totalPr;
    return totalPr;
}

// hàm lấy ra sản phẩm từ user
function userCartList(user) {
    var products = [];
    if (user) {
        var danhsachGioHang = user.productID;
        for (var item of danhsachGioHang) {
            var product = dataProducts.find(function (value) {
                return value.id == item.id;
            });
            product.orderQty = item.n;
            products.push(product)
        }
    }
    return products;
}
// add product vào cart
// userCartList(users[0])

var addProduct = function (products) {
    var prd = products(checkLogin());
    if (prd) {
        for (var product of prd) {
            addRow(product);
        }
        totalPrice();
        return true;
    }
    return false;
}

// end them sản phẩm

// tat ca san pham
var pushProduct = function (dataProducts, n) {
    var productList = document.getElementById("listProducts");
    var products = [];
    // in ra ngẫu nhiên số sản phẩm theo n
    if (n) {
        setTimeout(function () {
            for (let i = 0; i < n; ++i) {
                let k = Math.floor(Math.random() * 10);
                var item = `
                        <a  href="./products-detail.html" id="${dataProducts[k].id}" class="sale__item-link">
                            <div class="sale__wrap-img">
                                <img style="width:100%;" src="${dataProducts[k].url}" alt="" class="sale__img">
                                <span class="sale__view">Xem chi tiết</span>
                            </div>
                            <span title="${dataProducts[k].name}" class="sale__discript d-block">${dataProducts[k].name}</span>
                            <span class="sale__price text-danger d-block"> <sup>₫</sup>${dataProducts[k].price}</span>
                        </a>
                `;

                var div = document.createElement("div");
                div.classList.add("item", "col-6", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "py-4");
                div.innerHTML = item;
                // div.id =  dataProducts[k].id;
                productList.appendChild(div);
                products.push(dataProducts[k]);
            }
        }, 500);
    }

    else {
        // in ra tat cả sản phẩm có trong mảng
        for (var product of dataProducts) {
            var item = `
                    <a href="./products-detail.html" id="${product.id}" class="sale__item-link">
                        <div class="sale__wrap-img">
                            <img style="width:100%;" src="${product.url}" alt="" class="sale__img">
                            <span class="sale__view">Xem chi tiết</span>
                        </div>
                        <span title="${product.name}" class="sale__discript d-block">${product.name}</span>
                        <span class="sale__price text-danger d-block"> <sup>₫</sup>${product.price}</span>
                    </a>
            `;

            var div = document.createElement("div");
            div.classList.add("item", "col-6", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "py-4");
            div.id = product.id;
            div.innerHTML = item;

            productList.appendChild(div);
        }
    }
    return products;

}

// sự kiện filter
function filter(a, number) {
    var btnFs = document.querySelectorAll('.btn-filter');
    for (var btn of btnFs) {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            break;
        }
    }
    Redirect('./products.html');
    localStorage.setItem("filterActive", number);
}
// tìm kiếm
var btnSearch = document.querySelector(".search__btn");
var inputSearch = document.getElementById("search");

inputSearch.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        dataSearch();
    }
})

function dataSearch(){
    var text = document.getElementById("search").value.toLowerCase();
    var products = dataProducts.filter(function(product){
        return product.name.toLowerCase().includes(text);
    });
    localStorage.setItem("filterActive", 4);
    localStorage.setItem('searchProducts', JSON.stringify(products));
    window.location = "../pages/products.html";
}

btnSearch.addEventListener("click", function(e){
    e.preventDefault();
    dataSearch();
});

var btnPro = document.getElementById("btnProduct");
btnPro.addEventListener("click", function (event) {
    localStorage.setItem("filterActive", "0");
});

function sortFilter(n) {
    if (n == 3) {
        dataProducts.sort(function (data1, data2) {
            return data1.price - data2.price;
        });
        pushProduct(dataProducts);
    }if(n == 4){
        var products = JSON.parse(localStorage.getItem("searchProducts"));
        pushProduct(products);
    }
     else {
        pushProduct(dataProducts, 30);
    }
}

//  sự kiện khi ấn vào giỏ hàng
var cart = document.querySelector(".cart-link");

cart.addEventListener("click", function (event) {
    event.preventDefault();
    if (bool) {
        Redirect("../pages/cart.html");
    } else
        alert("vui lòng đăng nhập trước");
});


// đăng ký
function checkRegister() {
    var form = document.querySelector('#frmdangky');
    var data = Object.fromEntries(new FormData(form).entries());
    var regUserName = /(?=.*[a-zA-Z_0-9])\w{6,}/; // ít nhất phải có 6 ký tự không chứa ký tự đặc biệt
    var regPassword = /^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{8,})$/; //phải có 8 ký tự trở lên và có ít nhất 1 số
    var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var regName = /^([A-Z][a-z]+)(\s+[A-Z][a-z]+)+$/; // chữ cái đầu tiên phải bắt đầu bằng chữ in hoa và phải có họ và tên
    var regPhone = /[0-9]{10}/; // số điện thoại phải là số và có 10 chữ số 
    var lbUserName = document.querySelector("#lbTenDangNhap");
    var lbMatKhau = document.querySelector("#lbMatKhau");
    var lbNhapLaiMatKhau = document.querySelector("#lbNhapLaiMatKhau");
    var lbTen = document.querySelector("#lbTen");
    var lbDiaChi = document.querySelector("#lbDiaChi");
    var lbDt = document.querySelector("#lbDt");
    var lbEmail = document.querySelector("#lbEmail");
    var lbNgaySinh = document.querySelector("#lbNgaySinh");


    if (!regUserName.test(data.username)) {
        lbUserName.innerText = "Tên đăng nhập ít nhất phải có 6 ký tự không chứa ký tự đặc biệt";
        return false;
    }
    lbUserName.innerText = "";
    if (!regPassword.test(data.password)) {
        lbMatKhau.innerText = "Mật khẩu phải có 8 ký tự trở lên và có ít nhất 1 số";
        return false;
    }
    lbMatKhau.innerText = "";
    if (data.password !== data.kh_nhaplaimatkhau) {
        lbNhapLaiMatKhau.innerText = "Mật khẩu chưa khớp";
        return false;
    }
    lbNhapLaiMatKhau.innerText = "";
    if (!regName.test(data.kh_ten)) {
        lbTen.innerText = "Chữ cái đầu tiên phải bắt đầu bằng chữ in hoa và phải có họ và tên";
        return false;
    }
    lbTen.innerText = "";
    if (data.kh_diachi.trim().length == 0) {
        lbDiaChi.innerText = "Địa chỉ không được bỏ trống";
        return false;
    }
    lbDiaChi.innerText = "";
    if (!regPhone.test(data.kh_dienthoai)) {
        lbDt.innerText = "số điện thoại phải là số và có 10 chữ số ";
        return false;
    }
    lbDt.innerText = "";
    if (!regEmail.test(data.kh_email)) {
        lbEmail.innerText = "vui lòng điền đúng định dạng email";
        return false;
    }
    lbEmail.innerText = "";
    if (data.kh_namsinh > 2002) {
        lbNgaySinh.innerText = "bạn phải đủ 18 tuổi";
        return false;
    }
    lbNgaySinh.innerText = "";
    return true;
}


// get thông tin

var getThongTin = function (user) {
    document.getElementById("kh_ten").value = user.kh_ten;
    document.getElementById("kh_gioitinh").value = user.kh_gioitinh == 0 ? "Nam" : "Nữ";
    document.getElementById("kh_diachi").value = user.kh_diachi;
    document.getElementById("kh_dienthoai").value = user.kh_dienthoai;
    document.getElementById("kh_email").value = user.kh_email;
    document.getElementById("kh_ngaysinh").value = user.kh_ngaysinh + "/" + user.kh_thangsinh + "/" + user.kh_namsinh;
}

// phần thanh toán paying.html


var pay = function () {

    // lấy sản phẩm từ user ra
    var list = document.getElementById("listProductPay");
    var product = userCartList(userNow);
    var total = 0;
    for (var p of product) {
        var item = `
        <li class="list-group-item d-flex justify-content-between ">
            <div>
                <h4 class="my-0">${p.name}</h4>
                <small class="text-muted">${p.price} x ${p.orderQty} </small>
            </div>
            <span class="text-muted">${p.orderQty}</span>
        </li>
        `;
        list.innerHTML += item;
        total += p.price * p.orderQty;
    }
    var totalPrice = `
        <li class="list-group-item d-flex justify-content-between">
            <span>Tổng thành tiền</span>
            <strong id="thanhTien">${total}</strong>
        </li>
    `;
    list.innerHTML += totalPrice;
}
//  sự kiện ấn vào sản phẩm
var getProductId = function () {
    var a = document.getElementsByClassName("sale__item-link");
    
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function (e) {
            e.preventDefault();
            var productID = this.id;
            window.location = "./pages/products-detail.html?" + productID;
        })
    }
}

var showDetailProduct = function(){
    var linkItem = window.location.href;
    var id = linkItem.split("?")[1];
    var data = dataProducts.find(function(value, index){
        return value.id == id;
    })
    var imgProduct = document.querySelector(".product__detail-left");
    
    var linkImg = data.url.split(".jpg")[0];
    var imgLink2 = linkImg +".1.jpg";
    var imgLink3 = linkImg +".2.jpg";
    var dataImg = `
        <img src="${data.url}" class="product__detail-main w-50" data-bs-toggle="modal" data-bs-target="#imageView"></img>
        <div class="product__details row">
            <div class="d-flex justify-content-center"g-1 mt-2 row justify-content-center">
                <img src="${data.url}" style="width:100px" class=" mt-4 product__detail-img"></img>
                <img src="${imgLink2}" style="width:100px" class=" mt-4 product__detail-img"></img>
                <img src="${imgLink3}" style="width:100px" class=" mt-4 product__detail-img"></img>
            </div>
        </div>
    `;
    var modalViewImg = document.getElementById("modalViewImg");
    modalViewImg.innerHTML = `<img src="${data.url}"  class="w-100"></img>`;
    imgProduct.id = id ;
    imgProduct.innerHTML = dataImg;

    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var describe1 = document.getElementById("describe1");
    var describe2 = document.getElementById("describe2");
    var describe3 = document.getElementById("describe3");
    name.innerText = data.name;
    price.innerHTML = `Giá: <span class="text-danger">${data.price}<sup>đ<sup></span>`;
    describe1.innerText = data.describe1;
    describe2.innerText = data.describe2;
    describe3.innerText = data.describe3;
}

$(document).ready(function(){
    $("#btnAddToCard").click(function(){
        $('.toast').toast('show');
    })
});

// đếm sản phẩm trên giỏ hàng
var totalProduct = function(){
    var totalProduct = document.querySelector(".totalProduct");
    var total = userNow.productID.length;
    totalProduct.innerText = total;
}
totalProduct();

