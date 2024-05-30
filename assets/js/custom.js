const endDate = "01 June 2024 10:00 PM";
document.querySelector(".end-timer").textContent = endDate;

const timer = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = Math.floor(end - now) / 1000;
  const inputScreen = document.querySelectorAll(".screen input");

  if (diff < 0) return;

  //   Days
  inputScreen[0].value = Math.floor(diff / 3600 / 24);
  //   Hour
  inputScreen[1].value = Math.floor(diff / 3600) % 24;
  //   Minute
  inputScreen[2].value = Math.floor(diff / 60) % 60;
  //   Second
  inputScreen[3].value = Math.floor(diff) % 60;
};

setInterval(() => {
  timer();
}, 1000);

/*
Step 1: Create Dynamic End Date
Step 2: Create Timer Function
Step 3: Create End and Now Date using Js new Date() method
Step 4: Create Difference between End and Now Date
Step 5: Create Days,Hours,Minutes,Seconds using calculation
*/
