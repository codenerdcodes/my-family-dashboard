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

let currentCategory = null;

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

function showAccountCards(accounts, color) {
  itemInfo.innerHTML = "";
  accounts.forEach(function (account) {
    const accountCard = document.createElement("div");
    accountCard.classList.add("account-card");
    accountCard.style.borderColor = color;
    accountCard.innerHTML = `
      <div class="account-card-header">
        <span class="account-name">${account.name}</span>
        <a href="${account.url}" target="_blank" class="launch-btn-sm">Launch →</a>
      </div>
      <div class="credential-block">
        <p class="cred-label">USERNAME</p>
        <div class="cred-row">
          <p class="cred-value">${account.username}</p>
          <button class="copy-btn" onclick="navigator.clipboard.writeText('${account.username}')">Copy</button>
        </div>
      </div>
      <div class="credential-block">
        <p class="cred-label">PASSWORD</p>
        <div class="cred-row">
          <p class="cred-value pw-dots">••••••••••</p>
          <div style="display:flex;gap:8px;">
            <button class="show-btn" onclick="
              const el = this.closest('.cred-row').querySelector('.pw-dots');
              el.textContent = el.textContent === '••••••••••' ? '${account.password}' : '••••••••••';
            ">Show</button>
            <button class="copy-btn" onclick="navigator.clipboard.writeText('${account.password}')">Copy</button>
          </div>
        </div>
      </div>
    `;
    itemInfo.appendChild(accountCard);
  });
}

const categories = [
  {
    name: "Bills",
    icon: "💸",
    color: "#22c55e",
    memberView: false,
    accounts: [
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
    memberView: false,
    accounts: [
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
    memberView: true,
    members: [
      {
        name: "Will",
        icon: "👨",
        accounts: [
          {
            name: "Xbox",
            url: "https://www.xbox.com",
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
        name: "Jack",
        icon: "👦",
        accounts: [
          {
            name: "Xbox",
            url: "https://www.xbox.com",
            username: "jack@email.com",
            password: "P@ssWord!",
          },
          {
            name: "Playstation",
            url: "https://playstation.com",
            username: "jack@email.com",
            password: "P@ssWord!",
          },
        ],
      },
      {
        name: "Zach",
        icon: "👦",
        accounts: [
          {
            name: "Xbox",
            url: "https://www.xbox.com",
            username: "zach@email.com",
            password: "P@ssWord!",
          },
        ],
      },
    ],
  },
  {
    name: "Medical",
    icon: "🏥",
    color: "#f87171",
    memberView: true,
    members: [
      {
        name: "Will",
        icon: "👨",
        accounts: [
          {
            name: "United Health",
            url: "https://uhc.com",
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
        name: "Jen",
        icon: "👩",
        accounts: [
          {
            name: "United Health",
            url: "https://uhc.com",
            username: "jen@email.com",
            password: "P@ssWord!",
          },
          {
            name: "MyChart",
            url: "https://mychart.com",
            username: "jen@email.com",
            password: "P@ssWord!",
          },
        ],
      },
    ],
  },
  {
    name: "Documents",
    icon: "🪪",
    color: "#fb923c",
    memberView: true,
    members: [
      {
        name: "Will",
        icon: "👨",
        accounts: [
          { name: "Drivers License", url: "", username: "", password: "" },
          { name: "Passport", url: "", username: "", password: "" },
          { name: "Social Security", url: "", username: "", password: "" },
        ],
      },
      {
        name: "Jen",
        icon: "👩",
        accounts: [
          { name: "Drivers License", url: "", username: "", password: "" },
          { name: "Passport", url: "", username: "", password: "" },
          { name: "Social Security", url: "", username: "", password: "" },
        ],
      },
      {
        name: "Jack",
        icon: "👦",
        accounts: [
          { name: "Birth Certificate", url: "", username: "", password: "" },
          { name: "Social Security", url: "", username: "", password: "" },
        ],
      },
      {
        name: "Zach",
        icon: "👦",
        accounts: [
          { name: "Birth Certificate", url: "", username: "", password: "" },
          { name: "Social Security", url: "", username: "", password: "" },
        ],
      },
      {
        name: "Family",
        icon: "👨‍👩‍👦",
        accounts: [
          { name: "Tax Documents", url: "", username: "", password: "" },
          { name: "Home Warranty", url: "", username: "", password: "" },
        ],
      },
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
    currentCategory = category;
    dashboard.style.display = "none";

    if (category.memberView === false) {
      itemView.style.display = "flex";
      document.getElementById("itemTitle").textContent =
        `${category.icon} ${category.name}`;
      showAccountCards(category.accounts, category.color);
    } else {
      detailView.style.display = "flex";
      itemGrid.innerHTML = "";
      document.getElementById("detailTitle").textContent =
        `${category.icon} ${category.name}`;

      category.members.forEach(function (member) {
        const memberCard = document.createElement("div");
        memberCard.classList.add("card");
        memberCard.style.borderColor = category.color;

        const memberIcon = document.createElement("span");
        memberIcon.classList.add("card-icon");
        memberIcon.textContent = member.icon;

        const memberName = document.createElement("span");
        memberName.classList.add("card-name");
        memberName.textContent = member.name;
        memberName.style.color = category.color;

        memberCard.appendChild(memberIcon);
        memberCard.appendChild(memberName);

        memberCard.addEventListener("click", function () {
          detailView.style.display = "none";
          itemView.style.display = "flex";
          document.getElementById("itemTitle").textContent =
            `${member.icon} ${member.name}`;
          showAccountCards(member.accounts, category.color);
        });

        itemGrid.appendChild(memberCard);
      });
    }
  });

  categoryGrid.appendChild(card);
});

document.getElementById("backBtn").addEventListener("click", function () {
  detailView.style.display = "none";
  dashboard.style.display = "block";
});

document.getElementById("itemBackBtn").addEventListener("click", function () {
  itemView.style.display = "none";
  itemInfo.innerHTML = "";
  if (currentCategory && currentCategory.memberView === false) {
    dashboard.style.display = "block";
  } else {
    detailView.style.display = "flex";
  }
});
