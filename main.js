// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn.aaceimg.com/videos/c8j9rvvlym1c.mp4",
    "https://cdn2.slicadrivee.fun/videos/55j4OrnXe.mp4",
    "https://cdn.slicadrive.fun/videos/DQpIh6L7Q.mp4",
    "https://cdn.aceimmg.com/yvamn9iq0yfc.mp4",
    "https://cdn2.slicadrivee.fun/videos/qxUNpfcg6.mp4",
    "https://cdn2.slicedrivp.com/videos/57v2c3wwv2um.mp4",
    "https://cdn2.videy.co/AAovM0bj1.mp4",
    "https://cdn2.videy.co/CU550Zof1.mp4",
    "https://cdn2.videy.co/mRZ1Lm0Y1.mp4",
    "https://cdn2.videy.co/rTERwuzM1.mp4",
    "https://cdn2.aceimmg.com/aotpk1nto7bq.mp4",
    "https://cdn.aceimgg.com/myq7nawrz79o.mp4",
    "https://cdn.aceimgg.com/b8ir7no2qk1b.mp4",
    "https://cdn2.aceimmg.com/t01m1tt44mm4.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. LINK DETIK 1 SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://s.shopee.co.id/W8OcYn0Td",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 5. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 6. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://s.shopee.co.id/W8OcYn0Td",
            "_blank"
        );

    }, true);

}
