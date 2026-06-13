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
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "🔥 Gas",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "🛜 Internet",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "💧 Water",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "🚘 Car Insurance",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "📱 Phone",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },

  {
    name: "Streaming",
    icon: "📺",
    items: [
      {
        name: "Netflix",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Hulu",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Disney+",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Prime",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Gaming",
    icon: "🎮",
    items: [
      {
        name: "Xbox",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Playstation",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Steam",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Medical",
    icon: "🏥",
    items: [
      {
        name: "CVS",
        url: "https://www.dominionenergy.com",
        username: "paynew",
        password: "P@ssWord!",
      },
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
