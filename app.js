const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab__item");
const tabPanes = $$(".tab__pane");
const line = $(".line");

const tabItemActive = $(".tab__item.tab__item--active");

const setTabLine = (leftPos, width) => {
  line.style.left = leftPos + "px";
  line.style.width = width + "px";
};

setTabLine(tabItemActive.offsetLeft, tabItemActive.offsetWidth);

const changeTab = (tabItem, tabPane) => {
  //   Toggle active class for tabItem
  $(".tab__item.tab__item--active").classList.remove("tab__item--active");
  tabItem.classList.add("tab__item--active");

  // Toggle active class for TabPane
  $(".tab__pane.tab__pane--active").classList.remove("tab__pane--active");
  tabPane.classList.add("tab__pane--active");

  setTabLine(tabItem.offsetLeft, tabItem.offsetWidth);
};

let tabLength = tabItems.length - 1;

const autoChangeTab = () => {
  let tabItemActiving = $(".tab__item.tab__item--active");
  let posActiveClass = Array.from(tabItems).indexOf(tabItemActiving);

  posActiveClass === tabLength ? (posActiveClass = 0) : posActiveClass++;

  const tabItem = tabItems[posActiveClass];
  const tabPane = tabPanes[posActiveClass];

  changeTab(tabItem, tabPane);
};

let myInterval = setInterval(autoChangeTab, 3000);

tabItems.forEach((tabItem, index) => {
  tabItem.onclick = function () {
    let pane = tabPanes[index];
    changeTab(this, pane);
    clearInterval(myInterval);
    myInterval = setInterval(autoChangeTab, 3000);
  };
});
