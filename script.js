const loginScreen = document.getElementById("loginScreen");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const detailView = document.getElementById("detailView");
const itemGrid = document.getElementById("itemGrid");

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
      "⚡Electric",
      "🔥Gas",
      "🛜Internet",
      "💧Water",
      "🚘Car Insurance",
      "📱Phone",
    ],
  },
  {
    name: "Streaming",
    icon: "📺",
    items: ["Netflix", "Hulu", "Disney+", "Prime"],
  },
  { name: "Gaming", icon: "🎮", items: ["Xbox", "Playstation", "Steam"] },
  {
    name: "Medical",
    icon: "🏥",
    items: ["Insurance", "Web Portals", "Pharmacy", "School Records"],
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
      itemCard.textContent = item;
      itemGrid.appendChild(itemCard);
    });
  });
  dashboard.appendChild(card);
});

document.getElementById("backBtn").addEventListener("click", function () {
  detailView.style.display = "none";
  dashboard.style.display = "grid";
});
