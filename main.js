(function () {
    const hasPageScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    document.body.classList.toggle('has-scrollbar', hasPageScrollbar);
}
)();
