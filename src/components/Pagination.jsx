import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightCLick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>🤛🏼</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightCLick}>
        <div>🤜🏼</div>
      </button>
    </div>
  );
};

export default Pagination;
