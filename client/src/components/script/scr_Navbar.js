const hendlerClick = () => {
  const menu = document.getElementById("tog_menu");
  menu.classList.toggle("active");
  // Setting Line Menu span
  const spOne = document.getElementById("sp_One");
  const spTwo = document.getElementById("sp_Two");
  const spThree = document.getElementById("sp_Three");

  spOne.classList.toggle("active");
  spTwo.classList.toggle("active");
  spThree.classList.toggle("active");
};

const hendlerClickimg = () => {
  alert("Ini img");
};

export { hendlerClick, hendlerClickimg };
