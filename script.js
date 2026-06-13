const loginScreen = document.getElementById("loginScreen");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const detailView = document.getElementById("detailView");
const itemGrid = document.getElementById("itemGrid");
const itemView = document.getElementById("itemView");
const itemInfo = document.getElementById("itemInfo");

loginBtn.addEventListener("click", function () {
  if (passwordInput.value === "") {
    return;
  } else if (passwordInput.value === "family123!") {
    loginScreen.style.display = "none";
    dashboard.style.display = "grid";
  } else {
    passwordInput.style.border = "2px solid red";
    setTimeout(function () {
      passwordInput.style.border = "2px solid #00ffcc";
    }, 2000);
    passwordInput.value = "";
  }
});

const categories = [
  {
    name: "Bills",
    icon: "💸",
    items: [
      {
        name: "⚡ Electric",
        url: "https://myelectric.com",
        email: "will@email.com",
        password: "pass123",
      },
      {
        name: "🔥 Gas",
        url: "https://mygas.com",
        email: "will@email.com",
        password: "pass123",
      },
      {
        name: "🛜 Internet",
        email: "https://myinternet.com",
        username: "will@email.com",
        password: "pass123",
      },
      {
        name: "💧 Water",
        url: "https://mywater.com",
        email: "will@email.com",
        password: "pass123",
      },
      {
        name: "🚘 Car Insurance",
        url: "https://myinsurance.com",
        email: "will@email.com",
        password: "pass123",
      },
      {
        name: "📱 Phone",
        url: "https://Verizon.com",
        email: "jlpayne052710@gmail.com",
        password: "pass123",
      },
    ],
  },

  {
    name: "Streaming",
    icon: "📺",
    items: [
      {
        name: "Netflix",
        email: "codenerdcodes@gmail.com",
        password: "P@ssw0rd!!",
        url: "https://netflix.com",
      },
      {
        name: "Hulu",
        email: "codenerdcodes@gmail.com",
        password: "P@$$W0RD!",
        url: "https://www.hulu.com",
      },
      {
        name: "Disney+",
        email: "codenerdcodes@gmail.com",
        password: "P@$$W0RD!",
        url: "https://www.disneyplus.com.com",
      },
      {
        name: "Prime",
        email: "jlpayne052710@gmail.com",
        password: "P@$$W0RD!!",
        url: "https://www.primevideo.com",
      },
    ],
  },
  {
    name: "Gaming",
    icon: "🎮",
    items: [
      {
        name: "Xbox",
        email: "jlpayne052710@gmail.com",
        password: "9ijn0okm(IJN)OKM",
        url: "https://www.xbox.com",
      },
      {
        name: "Playstation",
        email: "codenerdcodes@gmail.com",
        password: "###123!",
        url: "https://playstation.com",
      },
      {
        name: "Steam",
        email: "atarigamer81@gmail.com",
        password: "$$$123abC",
        url: "https://store.steampowered.com/",
      },
    ],
  },
  {
    name: "Medical",
    icon: "🏥",
    items: [
      {
        name: "United Health Care",
        url: "https://uhc.com",
        email: "jlpayne052710@gmail.com",
        
      },
      "Web Portals",
      "Pharmacy",
      "School Records",
    ],
  },
  {
    name: "Documents",
    icon: "🪪",
    items: [
      "Tax Documents",
      "Birth Certificates",
      "Social Security Cards",
      "Passports",
      "Drivers License",
      "Car",
    ],
  },
];

categories.forEach(function (category) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = `${category.icon} ${category.name}`;
  card.addEventListener("click", function () {
    dashboard.style.display = "none";
    detailView.style.display = "flex";
    itemGrid.innerHTML = "";
    document.getElementById("detailTitle").textContent =
      `${category.icon} ${category.name}`;

    category.items.forEach(function (item) {
      const itemCard = document.createElement("div");
      itemCard.classList.add("card");
      itemCard.textContent = item.name;

      itemCard.addEventListener("click", function () {
        detailView.style.display = "none";
        itemView.style.display = "flex";
        document.getElementById("itemTitle").textContent = item.name;
        itemInfo.innerHTML = `
        <div class="info-row">
    <span class="info-label">🌐 Website</span>
    <a href="${item.url}" target="_blank" class="info-value">${item.url}</a>
  </div>
  <div class="info-row">
    <span class="info-label">👤 Username</span>
    <span class="info-value">${item.username}</span>
  </div>
  <div class="info-row">
    <span class="info-label">🔑 Password</span>
    <span class="info-value">${item.password}</span>
  </div>
`;
      });
      itemGrid.appendChild(itemCard);
    });
  });
  dashboard.appendChild(card);
});

document.getElementById("backBtn").addEventListener("click", function () {
  detailView.style.display = "none";
  dashboard.style.display = "grid";
});

document.getElementById("itemBackBtn").addEventListener("click", function () {
  itemView.style.display = "none";
  detailView.style.display = "grid";
});
