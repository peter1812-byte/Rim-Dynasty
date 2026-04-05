const productData = {
    "1": {
        name: "Nike JA 3 Sail White C101",
        price: "6.200.000đ",
        category: "Home / Basketball Shoes",
        img: "https://pos.nvncdn.com/3c8244-211061/pc/20250311_JA1ffteE.gif?v=1741664828",
        desc: "Nike JA 3 là dòng giày đặc trưng thứ ba của Ja Morant với đệm Air Zoom hỗ trợ bứt tốc."
    },
    "2": {
        name: "Jordan Sport Hoop Hoodie Black",
        price: "2.500.000đ",
        category: "Home / Apparel",
        img: "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw65482e23/nk/06d/a/1/4/6/1/06da1461_0421_42df_a1eb_989964f645b5.jpg",
        desc: "Áo hoodie Jordan chất liệu nỉ cao cấp, phong cách thể thao hiện đại."
    },
    "3": {
        name: "Áo Swingman Lakers Purple",
        price: "2.800.000đ",
        category: "Home / Jerseys",
        img: "https://i.ebayimg.com/images/g/68cAAOSwSzNbhTW5/s-l400.png",
        desc: "Áo đấu Lakers chính hãng, chất liệu Dri-FIT thoáng khí."
    },
    "4": {
        name: "Quần Short Jordan Stretch",
        price: "1.350.000đ",
        category: "Home / Apparel",
        img: "https://bizweb.dktcdn.net/100/340/361/products/7-f6a8a29f-5690-4085-8e8f-208f31569b71.jpg",
        desc: "Quần short co giãn 4 chiều, phù hợp tập luyện thể thao."
    },
    "5": {
        name: "City Edition Logo Tee",
        price: "1.100.000đ",
        category: "Home / T-Shirt",
        img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/74c84c6b-6c72-4033-9a88-df3706678e3f/MIL+M+NK+ES+CE+NN+SS+TEE.png",
        desc: "Áo thun NBA City Edition, in logo sắc nét."
    },
    "6": {
        name: "Nike Dry Short Dual",
        price: "950.000đ",
        category: "Home / Apparel",
        img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d9640cc8-ef2b-433e-bd17-0fab11d85452/M+J+DF+SPT+ESS+SHORT.png",
        desc: "Quần short Nike Dry giúp giữ cơ thể luôn khô ráo."
    },
    "7": {
        name: "Giày Bóng Rổ LeBron 21",
        price: "4.500.000đ",
        category: "Home / Basketball Shoes",
        img: "https://sneakerdaily.vn/wp-content/uploads/2023/10/Giay-Nike-Lebron-21-EP-Akoya-FV2346-001.jpg.webp",
        desc: "Giày LeBron 21 với công nghệ đệm hiện đại tăng độ bật."
    },
    "8": {
        name: "Áo Đấu GSW Stephen Curry",
        price: "3.100.000đ",
        category: "Home / Jerseys",
        img: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d2135791-b25a-4e7d-9c1d-91aeddc5e456/GSW+M+NK+ES+NN+SS+TEE.png",
        desc: "Áo đấu Stephen Curry phiên bản chính thức."
    },
    "9": {
        name: "Quần Dài Nỉ Chicago Bulls",
        price: "1.800.000đ",
        category: "Home / Apparel",
        img: "https://bizweb.dktcdn.net/100/425/004/products/2517762892750668962-1762237321779.jpg",
        desc: "Quần nỉ Chicago Bulls thoải mái, năng động."
    },
    "10": {
        name: "Băng Đô Thể Thao Nike NBA",
        price: "450.000đ",
        category: "Home / Accessories",
        img: "https://hoangtusport.com/wp-content/uploads/2023/09/z4735126383945_6a706e57c0dc51323766edf949ef2256.jpg",
        desc: "Băng đô thể thao thấm hút mồ hôi hiệu quả."
    },
    "11": {
        name: "Balo Thể Thao Jordan Hoops",
        price: "2.100.000đ",
        category: "Home / Accessories",
        img: "https://sneakerdaily.vn/wp-content/uploads/2024/12/Balo-Nike-Hoops-Elite-Black-DX9786-010.jpg",
        desc: "Balo Jordan Hoops tiện dụng cho vận động viên."
    },
    "12": {
        name: "Tất Bóng Rổ Nike Elite Crew",
        price: "350.000đ",
        category: "Home / Accessories",
        img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/mocjqigumjipzqnyexdh/U+NK+ELITE+CREW+132.png",
        desc: "Tất Nike Elite chống trơn, bảo vệ bàn chân."
    }
};

function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const mainImg = document.getElementById("MainImg");

    if (mainImg && productId && productData[productId]) {
        const item = productData[productId];

        mainImg.src = item.img;
        document.getElementById("proCategory").innerText = item.category;
        document.getElementById("proName").innerText = item.name;
        document.getElementById("proPrice").innerText = item.price;
        document.getElementById("proDesc").innerText = item.desc;
    }
}

window.onload = displayProductDetails;