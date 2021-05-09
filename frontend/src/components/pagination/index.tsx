import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
};

function Pagination({ page, onPageChange }: Props) {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page.number - 1)}>
              Anterior
            </button>
          </li>
          {Array(page.totalPages)
            .fill(1)
            .map((_, index) => (
              <li className={`page-item ${page.number === index ? "disabled" : ""}`}>
                <span className="page-link" style={{ cursor: "pointer" }} onClick={() => onPageChange(index)}>
                  {index + 1}
                </span>
              </li>
            ))}
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page.number + 1)}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
