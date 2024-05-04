const card_Item = () => {
  return (
    <div className="card_Container">
      <ul className=" card_List">
        <li className="card_List_Item">
          <img src="" alt="foto wisata"></img>
          <div className="card_L_I_Head">
            <h1>Nama Destinasi</h1>
            <p>Wisata Ini Terdapat pada</p>
            <div className="card_L_I_btn">
              <button>Detail</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default card_Item;
