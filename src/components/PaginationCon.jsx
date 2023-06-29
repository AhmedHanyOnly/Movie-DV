import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { PageNum } from "../Redux/Action/MovieAction";
import { useEffect, useState } from "react";

const PaginationCon = () => {
  const [totalePage, setTotalPage] = useState(0);
  const dispatch = useDispatch();

  
  
  const pagecount = (page) => {
    dispatch(PageNum(page));
  };
  
  const Tpage = useSelector((state) => state.PageCount);

  useEffect(() => {

      setTotalPage(Tpage);
      console.log(totalePage)
      console.log(Tpage)
    }, []);
    
    

  const handlePageClick = (data) => {
    pagecount(data);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break"
        breakLinkClassName="break-link"
        pageClassName="page"
        pageLinkClassName="page-link"
        activeClassName="active-page"
        activeLinkClassName="active-link"
        previousClassName="PN-btn"
        previousLinkClassName="PN-btn-link"
        nextClassName="PN-btn"
        nextLinkClassName="PN-btn-link"
        nextLabel="التالي >"
        onPageChange={(e) => handlePageClick(e.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount='500'
        previousLabel="< السابق"
        containerClassName=" pajContainer "
      />
    </div>
  );
};

export default PaginationCon;
