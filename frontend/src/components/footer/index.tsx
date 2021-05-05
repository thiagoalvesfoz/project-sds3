function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a href="https://github.com/thiagoalvesfoz" target="_blank" rel="noreferrer">
            Thiago Alves
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a href="https://instagram.com/dev_thiago" target="_blank" rel="noreferrer">
              @dev_thiago
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
