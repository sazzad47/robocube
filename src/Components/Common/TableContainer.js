import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect,
} from "react-table";
import { Table, Input } from "reactstrap";
import { DefaultColumnFilter } from "./filters";

// Define a default UI for filtering
function GlobalFilter({ globalFilter, isGlobalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      {isGlobalFilter && (
        <div className="d-flex gap-2 align-items-center">
          <span>Search:</span>
          <input
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            id="search-bar-0"
            type="text"
            className="form-control"
            value={value || ""}
          />
        </div>
      )}
    </React.Fragment>
  );
}

const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0,
        pageSize: customPageSize,
        selectedRowIds: 0,
        sortBy: [
          {
            id: columns[0].accessor,
            asc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (
      column.isSortedDesc ? (
        <span className="ms-1">&darr;</span>
      ) : (
        <span className="ms-1">&uarr;</span>
      )
    ) : column.Header === "Action" ? (
      ""
    ) : (
      <span className="ms-1">&uarr;&darr;</span>
    );
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between my-3">
        <div>
          <select
            className="form-select"
            value={pageSize}
            onChange={onChangeInSelect}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <GlobalFilter
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isGlobalFilter={isGlobalFilter}
            SearchPlaceholder={SearchPlaceholder}
          />
        </div>
      </div>

      <div className={divClass}>
        <Table hover {...getTableProps()} className={tableClass}>
          <thead className={theadClass} >
            {headerGroups.map((headerGroup) => (
              <tr
                className={trClass}
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    className={thClass}
                    {...column.getSortByToggleProps()}
                  >
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="d-flex justify-content-between align-items-center p-2">
        <div>
          <div>
            Showing {pageIndex * pageSize + 1} to{" "}
            {pageIndex * pageSize + page.length} of {data.length} entries
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-white"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <div className="page-number btn ">{pageIndex + 1}</div>
          <div className="col-md-auto">
            <div className="d-flex gap-1">
              <button
                className="btn btn-white"
                onClick={nextPage}
                disabled={!canNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;
