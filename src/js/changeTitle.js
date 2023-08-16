const title = document.querySelector("title");
const changeTitle = (newTitle) => {
    title.innerText = newTitle;
};

document.addEventListener("visibilitychange", function () {
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
