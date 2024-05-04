const carousel = () => {
  return (
    <div className="head_container">
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/develop/client/photo/1.jpg"
              className="d-block w-100"
              alt="Foto pertama"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/develop/client/photo/2.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Rasyahodhe/24001107_44_Lao_munaDestination_Challenge-Gold/develop/client/photo/3.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default carousel;