JavaScript
// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // ข้อมูลผู้ใช้ที่กำหนดไว้ล่วงหน้า (ตัวอย่าง)
    const correctUsername = "Shinnosuke";
    const correctPassword = "0926754281";

    // รับค่าจากฟอร์ม
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ตรวจสอบข้อมูล
    if (username === correctUsername && password === correctPassword) {
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "index.html"; // ไปยังหน้าแรกหลังจากเข้าสู่ระบบ
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
    }
});