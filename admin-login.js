Javascript
// admin-login.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctAdminUsername = "admin"; // ชื่อผู้ดูแลระบบ
    const correctAdminPassword = "admin123"; // รหัสผ่านผู้ดูแลระบบ

    const adminUsername = document.getElementById("admin-username").value;
    const adminPassword = document.getElementById("admin-password").value;

    if (adminUsername === correctAdminUsername && adminPassword === correctAdminPassword) {
        alert("เข้าสู่ระบบผู้ดูแลสำเร็จ!");
        window.location.href = "admin-dashboard.html"; // หลังจากเข้าสู่ระบบไปที่ Dashboard
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
    }
});