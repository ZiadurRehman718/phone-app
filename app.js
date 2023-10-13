const mainDiv = document.getElementById("main-div");
const phones = [
    {   
        img: './assets/samsung-galaxy-s20.jpg',
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        img: './assets/xiaomi-redmi-note10.jpg',
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        img: './assets/infinix-hot-30.jpg',
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        img: './assets/tecno-spark10.jpg',
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        img: './assets/apple-iphone-14.jpg',
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        img: './assets/oppo-f11-pro.jpg',
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        img: './assets/vivo-y20.jpg',
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        img: './assets/google-pixel-8.jpg',
        brand: 'Google',
        model: 'Pixel 8',
        ram: 8,
        rom: 512,
        camera: '60 megapixel',
        price: 150000
    },
    {
        img: './assets/zte-nubia-red-magic-7.jpg',
        brand: 'Nubia',
        model: 'Red Magic 7',
        ram: 8,
        rom: 512,
        camera: '17 megapixel',
        price: 15000
    },
    {
        img: './assets/asus-rog-phone6.jpg',
        brand: 'Asus',
        model: 'ROG Phone 6',
        ram: 8,
        rom: 512,
        camera: '60 megapixel',
        price: 150000
    },
]

const div = document.querySelector('.containers');


for (let i = 0; i < phones.length; i++) {
    // //console.log(phones[i]);
    div.innerHTML += `
    <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl">
            <img src="${phones[i].img}"  
            <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
    </div>
    `

}

const cartData = localStorage.getItem('cartItem');
const jsonData = JSON.parse(cartData);

let cartArr;
if(Array.isArray(jsonData)){
    cartArr = [...jsonData]

}else{
    cartArr = []
}

// Adding into cart function

function addToCart(index) {
    if (cartArr.includes(phones[index])) {
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].quantity += 1
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item quantity updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
}






//goto cart function

function goToCart() {
    const cart = JSON.stringify(cartArr);
    localStorage.setItem('cartItem' , cart);
    //console.log('cart called');
    window.location = 'cart.html';
}

// login function

const login = document.querySelector(".login");
const mainDiv2 = document.querySelector("#main-div2");

login.addEventListener("click", function () {
  setTimeout(clickingLogin, 330);
});

function clickingLogin() {
  console.log("Login Working");
  mainDiv2.innerHTML = `  <div class="center">
  <div class="container">
  <label style="display:flex; justify-content:end; cursor:pointer;" onclick="remove();" class="close-btn fas fa-times" title="close"></label>
  <div class="text">Login </div>
  <form action="#">
    <div class="data">
      <label>Username or Email  </label>
      <input  class="email" type="text"  required />
    </div>
    <div class="data">
      <label>Password</label>
      <input class="password" type="password" required />
    </div>
    <div class="forgot-pass">
      <a onclick="signing()">Create account?</a>
    </div>
    <div class="btn">
      <div class="inner"></div>
      <button type="submit">login</button>
    </div>

  </form>
</div>
</div>`;
  if (mainDiv2.innerHTML === "") {
    mainDiv.style.opacity = 10000000;
  } else {
    mainDiv.style.opacity = 0.2;
  }

  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const pass = document.querySelector(".password");
  // email.focus();
  let userD = JSON.parse(localStorage.getItem("userD"));
  form.addEventListener("submit", sub);

  function sub(e) {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < userD.length; i++) {
      if (email.value == userD[i].email && pass.value == userD[i].Cpass) {
        found = true;
        break;
      }
    }

    if (found) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logging in",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        window.location = "index.html";
      }, 1500);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Not an Account",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        signing();
      }, 1500);
    }
    form.reset();
  }
}
// !Signup button Rendering
const signup = document.querySelector(".signup");
signup.addEventListener("click", function () {
  setTimeout(signing, 330);
});

function signing() {
  console.log("Signup Working");
  mainDiv2.innerHTML = `  <div class="center con">
  <div class="container main-con">
  <label style="display:flex; justify-content:end; cursor:pointer;" onclick="remove();" class="close-btn fas fa-times" title="close"></label>
  <div class="text">Sign Up</div>
  <form action="#">
  <div class="data" id="less-h">
  <label>Username</label>
  <input class="username"  type="text" required />
  </div>
  <div class="data "  id="less-h" >
    <label>Email or Phone</label>
    <input class="phone " type="text" required />
  </div>
    <div class="data "  id="less-h" >
      <label>Password</label>
      <input class="pas " type="password" required />
    </div>
    <div class="data "  id="less-h" >
      <label>Confirm Password</label>
      <input class="Cpas" type="password" required />
    </div>
    <div class="forgot-pass">
      <a onclick="clickingLogin()">Already Have an Account</a>
    </div>
    <div class="btn">
      <div class="inner"></div>
      <button type="submit">Create</button>
    </div>

    </form>
   </div>
</div>`;
  if (mainDiv2.innerHTML === "") {
    mainDiv.style.opacity = 10000000;
  } else {
    mainDiv.style.opacity = 0.2;
  }
  const form = document.querySelector("form");
  form.addEventListener("submit", create);

  function create(e) {
    console.log("Working");
    e.preventDefault();
    const existingData = localStorage.getItem("userD");
    const signD = existingData ? JSON.parse(existingData) : [];
    const username = document.querySelector(".username");
    const email = document.querySelector(".phone");
    const pass = document.querySelector(".pas");
    const Cpass = document.querySelector(".Cpas");

    const userDetails = {
      username: username.value,
      email: email.value,
      pass: pass.value,
      Cpass: Cpass.value,
    };

    if (pass.value === Cpass.value) {
      signD.push(userDetails);
      localStorage.setItem("userD", JSON.stringify(signD));
      form.reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Account Created",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        window.location = "index.html";
      }, 1500);
    } else {
      console.log("Passwords are not the same");
      alert("Passwords are not the same");
    }
  }
}
function remove() {
  console.log("Remove Working");
  mainDiv2.remove();
  location.reload();
}