//Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "Catalog", href: "/Catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Part 1: Getting Started
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//Part 2:Creating a Menu Bar
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part 3:Adding Menu Buttons
for (let i = 0; i < menuLinks.length; i++) {
  const link = document.createElement("a");
  link.href = menuLinks[i].href;
  link.textContent = menuLinks[i].text;
  topMenuEl.appendChild(link);
}
