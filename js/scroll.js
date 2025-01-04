export const scroll = (() => {

    /**
     * @type {HTMLElement|null}
     */
    let scrollButton = null;

    /**
     * @type {HTMLElement|null}
     */
    let invitationText = null;

    let isScrolling = false;

    const stateScrollOn = '<i class="fa-solid fa-spinner fa-spin"></i>';  // Ikon untuk scroll aktif
    const stateScrollOff = '<i class="fa-solid fa-scroll"></i>';         // Ikon untuk scroll mati

    const startScrolling = () => {
        invitationText = document.getElementById('invitation-text');  // Pastikan ini sesuai dengan ID konten undangan

        // Mulai scroll otomatis
        scrollButton.innerHTML = stateScrollOn;
        isScrolling = true;

        scrollInterval = setInterval(() => {
            invitationText.scrollTop += 1;  // Menambahkan sedikit scroll setiap interval
        }, 30);  // Waktu interval (dalam milidetik)
    };

    const stopScrolling = () => {
        // Hentikan scroll otomatis
        clearInterval(scrollInterval);
        scrollButton.innerHTML = stateScrollOff;
        isScrolling = false;
    };

    const init = () => {
        scrollButton = document.getElementById('button-scroll');

        // Tombol scroll untuk mengaktifkan atau menghentikan auto scroll
        scrollButton.addEventListener('click', () => {
            if (isScrolling) {
                stopScrolling();
            } else {
                startScrolling();
            }
        });

        // Aktifkan auto scroll saat halaman pertama kali dimuat
        if (invitationText) {
            startScrolling();
        }
    };

    return {
        init,
    };
})();
