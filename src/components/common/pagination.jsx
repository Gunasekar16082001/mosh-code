import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const {itemsCount, pageSize, currentPage, onPageChange} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
            <span className="page-link"
                  onClick={() => onPageChange(page)}>
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, // Total Data Count
  pageSize: PropTypes.number.isRequired, // Total Pages
  currentPage: PropTypes.number.isRequired, //
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
