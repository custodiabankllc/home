/* =========================
   NAVBAR — Desktop Dropdowns
========================= */

const navDropBtns = document.querySelectorAll('.nav-drop-btn');

navDropBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const parentDropdown = btn.closest('.nav-dropdown');
        const isOpen = parentDropdown.classList.contains('active');

        // Close all open nav dropdowns
        document.querySelectorAll('.nav-dropdown.active').forEach(d => d.classList.remove('active'));

        // Toggle clicked one
        if (!isOpen) {
            parentDropdown.classList.add('active');
        }
    });
});

// Close nav dropdowns when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown.active').forEach(d => d.classList.remove('active'));
});


/* =========================
   MOBILE DRAWER
========================= */

const menuBtn      = document.querySelector('.menu-btn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileOverlay = document.getElementById('mobileOverlay');
const drawerClose  = document.getElementById('drawerClose');

function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuBtn)       menuBtn.addEventListener('click', openDrawer);
if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);


/* =========================
   DRAWER — Accordion Submenus
========================= */

const drawerDropBtns = document.querySelectorAll('.drawer-dropdown-btn');

drawerDropBtns.forEach(btn => {
    const submenu = btn.nextElementSibling;

    // Only wire up buttons that actually have a submenu
    if (!submenu || !submenu.classList.contains('drawer-submenu')) return;

    btn.addEventListener('click', () => {
        const parentItem = btn.closest('.drawer-dropdown');
        const isOpen = parentItem.classList.contains('active');

        // Close all other open submenus
        document.querySelectorAll('.drawer-dropdown.active').forEach(item => {
            item.classList.remove('active');
            const sub = item.querySelector('.drawer-submenu');
            if (sub) sub.style.maxHeight = null;
        });

        // Toggle clicked one
        if (!isOpen) {
            parentItem.classList.add('active');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }
    });
});


/* =========================
   NAVBAR — Scroll / Sticky
========================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
