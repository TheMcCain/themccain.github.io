// DRAGGING

console.log("drag script loaded, update v1 working");

const windowEl = document.querySelector(".window");
const titleBar = windowEl.querySelector(".title-bar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (e) => {
  isDragging = true;

  const rect = windowEl.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  windowEl.style.left = e.clientX - offsetX + "px";
  windowEl.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "";
});











// TABS

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

// Ensure only the selected tab's panel is visible on load
panels.forEach(panel => {
  panel.hidden = true;
});

const activeTab = document.querySelector('[role="tab"][aria-selected="true"]');
if (activeTab) {
  const panel = document.getElementById(activeTab.getAttribute('aria-controls'));
  if (panel) panel.hidden = false;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));

    panels.forEach(p => {
      p.hidden = true;
    });

    tab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById(
      tab.getAttribute('aria-controls')
    );

    if (panel) {
      panel.hidden = false;
    }
  });
});
