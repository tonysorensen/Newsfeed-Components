/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

 Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


// Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// The 'menuMaker' takes an array as its only argument.

const menuData = menuItems;
const menuMaker = (data) => {

  const menu = document.createElement("div");
  let list = document.createElement("ul");
  

  menu.classList.add("menu");

  menu.appendChild(list);
console.log('menu', menu)
  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>
  
let itemsArray = data.map((item) => {
  let listItem = document.createElement("li");
  console.log('list item', listItem)
  listItem.textContent = item
  list.appendChild(listItem)
})
console.log('itemsArray', itemsArray)
console.log('menu items', menuItems)
console.log('menu data', menuData)

//  menuData.map((item) => {
//   let listItem = document.createElement("li");
//      listItem.textContent = `${[item]}`
//      list.appendChild(listItem)
//      return listItem
//   })
  

//   function appendChildren  (list, listItem)  {
//   listItem.forEach(function (item)  {
//   list.appendChild(item)
// })
//   }
  
// appendChildren(list, listItem)

 
  // console.log(list)
  // newList.forEach((item) => {
  //   list.appendChild(item)
  // })
  // console.log(list)

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
const menuButton = document.querySelector('.menu-button')

// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    console.log('clicked menu')
  });


  // Step 5: return your div with a 'menu' class.
  return menu;
};


// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
const header = document.querySelector('.header')
console.log(header)
let firstMenu = menuMaker(menuData)
  header.appendChild(firstMenu)
