const recom_Des = () => {
  return (
    <article className="recomdes_container">
      <h1>Ini Halaman Recomendasi</h1>
      <ul className="recomdes">
        <li className="recomdes_item">
          <img alt="Ini Foto Destinasi"></img>
          <div className="recomdes_Item_Tittle">
            <h1>Nama Destinasi</h1>
            <p className="recomdes_Item_Explain">
              Destinasi Ini berada di salah satu lokasi yang terdapat di sultra
            </p>
            <div className="recomdes_Item_btn">
              <button>Detail</button>
            </div>
          </div>
        </li>
      </ul>
    </article>
  );
};

export default recom_Des;
