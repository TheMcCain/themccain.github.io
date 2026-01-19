// DRAGGING

console.log("drag script loaded, update v1.1 working");

const windowEl = document.querySelector(".window");
const titleBar = windowEl.querySelector(".title-bar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Ensure the window has initial left/top
const rect = windowEl.getBoundingClientRect();
windowEl.style.position = "absolute";
windowEl.style.left = rect.left + "px";
windowEl.style.top = rect.top + "px";

titleBar.addEventListener("mousedown", (e) => {
  isDragging = true;

  const rect = windowEl.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.body.style.userSelect = "none";
  windowEl.style.zIndex = 1000; // bring to front while dragging
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // Clamp to viewport (optional, prevents moving off-screen)
  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  windowEl.style.left = Math.max(0, newLeft) + "px";
  windowEl.style.top = Math.max(0, newTop) + "px";
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  document.body.style.userSelect = "";
});
;











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



// other stuff
document.title = "REAL MCCAIN PATRIOTS OVER HERE";
<link rel="icon" type="image/png" sizes="48x48" href="https://www.rw-designer.com/icon-image/18838-256x256x32.png">



