import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function BeerTable() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBeers(page);
  }, [page]);

  const fetchBeers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=10`);
      setBeers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>ABV</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.tagline}</td>
              <td>{beer.abv}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BeerTable;
