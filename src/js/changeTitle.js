const title = document.querySelector('title');
const changeTitle = (newTitle) => {
    title.innerText = newTitle;
};

// if user change tabs in browser change title
// window.addEventListener('blur', () => {
//     changeTitle('Come back!');
// });

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
      // When the tab becomes visible, change the title
      document.title = "Welcome back!";
      setTimeout(() => {
        document.title = "Haopeng's Portofolio";
        }, 2000);
    } else {
      // When the tab becomes hidden, change the title
      document.title = "(T⌓T) Come back pls!";
    }
  });

// // if user come back to tab change title
// window.addEventListener('focus', () => {
//     changeTitle('Welcome back!');
//     setTimeout(() => {
//         changeTitle("Haopeng's Portofolio");
//     },1000);
// });