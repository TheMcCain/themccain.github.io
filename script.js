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





// SCROLLBAR
(function () {
    const hasPageScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    document.body.classList.toggle('has-scrollbar', hasPageScrollbar);
}
)();

function ensureStylesheet(url, id) {
	if (id && document.getElementById(id)) {
        if (id === 'unpkg-7css') {
            const link = document.getElementById(id);
if (link) link.remove();
            return; 
        }
        return;
    }
	if (document.querySelector('link[rel="stylesheet"][href="' + url + '"]')) return;
const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	if (id) link.id = id;
	document.head.appendChild(link);
}

function ensureMetaViewport() {
    if (!document.querySelector('meta[name="viewport"]')) {
        const m = document.createElement('meta');
m.name = 'viewport';
        m.content = 'width=device-width, initial-scale=1';
        document.head.appendChild(m);
    }
}

applyGlobalStyles.sheets = {};
function applyGlobalStyles(css, id = 'app-theme') {
    if ('adoptedStyleSheets' in document && 'replaceSync' in CSSStyleSheet.prototype) {
        if (!applyGlobalStyles.sheets[id]) {
            applyGlobalStyles.sheets[id] = new CSSStyleSheet();
document.adoptedStyleSheets = [...document.adoptedStyleSheets, applyGlobalStyles.sheets[id]];
        }
        applyGlobalStyles.sheets[id].replaceSync(css);
        return;
}

    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('style');
el.id = id;
        document.head.appendChild(el);
    }
    el.textContent = css;
}









// other stuff
document.title = "REAL MCCAIN PATRIOTS WEBSITE";

document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

const favican = document.createElement("link");
favican.rel = "icon";
favican.type = "png";
favican.href = "https://www.rw-designer.com/icon-image/18838-256x256x32.png";

document.head.appendChild(favican);





