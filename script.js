const navbar = document.getElementById('navbar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebarCollapse = document.getElementById('sidebarCollapse');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        sidebarCollapse.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            const icon = sidebarCollapse.querySelector('i');
            if (sidebar.classList.contains('collapsed')) {
                icon.className = 'fas fa-angles-right';
            } else {
                icon.className = 'fas fa-angles-left';
            }
        });

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('.side-drop-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.parentElement.classList.toggle('open');
            });
        });

        const dropdowns = document.querySelectorAll('.dropdown > a');
        dropdowns.forEach(drop => {
            drop.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    drop.parentElement.classList.toggle('open');
                }
            });
        });
