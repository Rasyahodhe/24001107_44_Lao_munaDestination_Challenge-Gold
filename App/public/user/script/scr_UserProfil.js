const btn_del = document.getElementById(btn_del);
btn_del.addEventListener("click", deldata());
const deldata = () => {
  fetch("http://localhost:3300/del", {
    method: "DELETE",
  })
    .then((respons) => {
      respons.json();
    })
    .then((data) => {
      console.log("Data Berhasil Kosong");
    });
};
