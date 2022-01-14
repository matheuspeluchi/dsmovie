import axios from "axios";
import MovieCard from "components/MovieCard/MovieCard";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/moviePage";
import { BASE_URL } from "utils/requests";

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then((res) => {
      const data = res.data as MoviePage;
      setPageNumber(data.number);
      setPage(data);
    });
  }, [pageNumber]);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination page={page} onChange={handlePageChange} />

      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
