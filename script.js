const loginScreen = document.getElementById("loginScreen");
const appShell = document.getElementById("appShell");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const detailView = document.getElementById("detailView");
const itemGrid = document.getElementById("itemGrid");
const itemView = document.getElementById("itemView");
const itemInfo = document.getElementById("itemInfo");
const categoryGrid = document.getElementById("categoryGrid");

loginBtn.addEventListener("click", function () {
  if (passwordInput.value === "") {
    return;
  } else if (passwordInput.value === "family123!") {
    loginScreen.style.display = "none";
    appShell.style.display = "block";

    const today = new Date();
    const dateString = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    document.getElementById("navDate").textContent = dateString;
    document.getElementById("welcomeMsg").textContent =
      `Good ${getTimeOfDay()}, Will 👋`;
  } else {
    passwordInput.style.border = "2px solid red";
    setTimeout(function () {
      passwordInput.style.border = "1px solid #ffffff20";
    }, 2000);
    passwordInput.value = "";
  }
});

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

const categories = [
  {
    name: "Bills",
    icon: "💸",
    color: "#22c55e",
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
        url: "https://www.xfinity.com",
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
        url: "https://www.geico.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "📱 Phone",
        url: "https://www.verizon.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Streaming",
    icon: "📺",
    color: "#a78bfa",
    items: [
      {
        name: "Netflix",
        url: "https://netflix.com",
        username: "codenerdcodes@gmail.com",
        password: "P@ssWord!",
      },
      {
        name: "Hulu",
        url: "https://hulu.com",
        username: "codenerdcodes@gmail.com",
        password: "P@ssWord!",
      },
      {
        name: "Disney+",
        url: "https://disneyplus.com",
        username: "codenerdcodes@gmail.com",
        password: "P@ssWord!",
      },
      {
        name: "Prime",
        url: "https://primevideo.com",
        username: "jlpayne052710@gmail.com",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Gaming",
    icon: "🎮",
    color: "#38bdf8",
    items: [
      {
        name: "Xbox",
        url: "https://www.xbox.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Playstation",
        url: "https://playstation.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "Steam",
        url: "https://store.steampowered.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Medical",
    icon: "🏥",
    color: "#f87171",
    items: [
      {
        name: "United Health",
        url: "https://uhc.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "CVS Pharmacy",
        url: "https://cvs.com",
        username: "paynew",
        password: "P@ssWord!",
      },
      {
        name: "MyChart",
        url: "https://mychart.com",
        username: "paynew",
        password: "P@ssWord!",
      },
    ],
  },
  {
    name: "Documents",
    icon: "🪪",
    color: "#fb923c",
    items: [
      { name: "Tax Documents", url: "", username: "", password: "" },
      { name: "Birth Certificates", url: "", username: "", password: "" },
      { name: "Social Security Cards", url: "", username: "", password: "" },
      { name: "Passports", url: "", username: "", password: "" },
      { name: "Drivers License", url: "", username: "", password: "" },
    ],
  },
];

categories.forEach(function (category) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.borderColor = category.color;

  const icon = document.createElement("span");
  icon.classList.add("card-icon");
  icon.textContent = category.icon;

  const name = document.createElement("span");
  name.classList.add("card-name");
  name.textContent = category.name;
  name.style.color = category.color;

  card.appendChild(icon);
  card.appendChild(name);

  card.addEventListener("click", function () {
    dashboard.style.display = "none";
    detailView.style.display = "flex";
    itemGrid.innerHTML = "";
    document.getElementById("detailTitle").textContent =
      `${category.icon} ${category.name}`;

    category.items.forEach(function (item) {
      const itemCard = document.createElement("div");
      itemCard.classList.add("card");
      itemCard.style.borderColor = category.color;

      const itemIcon = document.createElement("span");
      itemIcon.classList.add("card-icon");
      itemIcon.textContent = "📄";

      const itemName = document.createElement("span");
      itemName.classList.add("card-name");
      itemName.textContent = item.name;
      itemName.style.color = category.color;

      itemCard.appendChild(itemIcon);
      itemCard.appendChild(itemName);

      itemCard.addEventListener("click", function () {
        detailView.style.display = "none";
        itemView.style.display = "flex";
        document.getElementById("itemTitle").textContent = item.name;
        itemInfo.innerHTML = `
          <div class="detail-hero">
            <h1 class="detail-service-name">${item.name}</h1>
            <a href="${item.url}" target="_blank" class="launch-btn">Launch →</a>
          </div>
          <div class="credential-block">
            <p class="cred-label">USERNAME</p>
            <div class="cred-row">
              <p class="cred-value">${item.username}</p>
              <button class="copy-btn" onclick="navigator.clipboard.writeText('${item.username}')">Copy</button>
            </div>
          </div>
          <div class="credential-block">
            <p class="cred-label">PASSWORD</p>
            <div class="cred-row">
              <p class="cred-value" id="passwordDisplay">••••••••••</p>
              <div style="display:flex;gap:8px;">
                <button class="show-btn" onclick="
                  const el = document.getElementById('passwordDisplay');
                  el.textContent = el.textContent === '••••••••••' ? '${item.password}' : '••••••••••';
                ">Show</button>
                <button class="copy-btn" onclick="navigator.clipboard.writeText('${item.password}')">Copy</button>
              </div>
            </div>
          </div>
        `;
      });
      itemGrid.appendChild(itemCard);
    });
  });
  categoryGrid.appendChild(card);
});

document.getElementById("backBtn").addEventListener("click", function () {
  detailView.style.display = "none";
  dashboard.style.display = "block";
});

document.getElementById("itemBackBtn").addEventListener("click", function () {
  itemView.style.display = "none";
  detailView.style.display = "flex";
});
