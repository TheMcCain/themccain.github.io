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




// TOOLTIPS

const tooltips = document.querySelectorAll('.mytooltip');

tooltips.forEach(el => {
    const tooltip = el.querySelector('.mytooltiptext');
    
    el.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        
        const rect = tooltip.getBoundingClientRect();
        const offset = 10; // small padding from edge
        
        // Right edge
        if (rect.right > window.innerWidth) {
            tooltip.style.left = `calc(100% - ${rect.width + offset}px)`;
            tooltip.style.transform = 'none';
        }
        // Left edge
        if (rect.left < 0) {
            tooltip.style.left = `${offset}px`;
            tooltip.style.transform = 'none';
        }
        // Top edge
        if (rect.top < 0) {
            tooltip.style.bottom = 'auto';
            tooltip.style.top = '125%';
        }
        // Bottom edge
        if (rect.bottom > window.innerHeight) {
            tooltip.style.bottom = '125%';
            tooltip.style.top = 'auto';
        }
    });

    el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.bottom = '125%';
        tooltip.style.top = 'auto';
    });
});












// other stuff
document.title = "REAL MCCAIN PATRIOTS WEBSITE";

document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

const favican = document.createElement("link");
favican.rel = "icon";
favican.type = "png";
favican.href = "https://www.rw-designer.com/icon-image/18838-256x256x32.png";

document.head.appendChild(favican);





