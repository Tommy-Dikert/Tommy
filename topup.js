JavaScript
document.getElementById("topup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;

    if (amount <= 0) {
        alert("กรุณาระบุจำนวนเงินที่ถูกต้อง");
        return;
    }

    // กำหนดเบอร์ผู้รับเงิน (เบอร์ TrueMoney)
    const receiverPhoneNumber = "0926754281";

    // สร้างลิงก์ซองอั่งเปา
    const trueMoneyURL = `https://gift.truemoney.com/campaign/?amount=${amount}&receiver=${receiverPhoneNumber}`;

    // สร้าง QR Code
    const qrCodeDiv = document.getElementById("qr-code");
    qrCodeDiv.innerHTML = `<p>สแกน QR Code เพื่อเติมเงิน</p>
                           <img src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(trueMoneyURL)}" alt="QR Code">`;

    alert("สร้างซองอั่งเปาสำเร็จ!");
});