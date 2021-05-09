import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { baseURL } from "utils/api";
import { formatLocalDate } from "utils/format";

const inicialState: SalePage = {
  last: false,
  totalPages: 0,
  totalElements: 0,
  first: true,
  number: 0,
  numberOfElements: 0,
  size: 0,
  empty: true,
};

function DataTable() {
  const [page, setPage] = useState<SalePage>(inicialState);
  const [activePage, setActivePage] = useState<number>(0);

  useEffect(() => {
    axios.get(`${baseURL}/sales?page=${activePage}&size=20&sort=date,desc`).then((res) => {
      setPage(res.data);
    });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page?.content?.map((item) => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>R$ {item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
