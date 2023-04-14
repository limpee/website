import imgLogo from "../assets/img/logo-footer.svg";

function Footer() {
  return (
    <footer className="footer-wave mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mt-3">
            <img src={imgLogo} className="text-center" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <p className="text-light">@ 2010-2023 - Direitos reservados</p>
            <p className="text-light"></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
