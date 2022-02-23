import React from "react"
import PropTypes from "prop-types"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

const BasicTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, rowIndex) => {
            return (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {Object.values(row).map((data: string, index) => {
                  const rowLength = Object.values(row).length

                  if (index === 0) {
                    return (
                      <TableCell component="th" scope="row">
                        {data}
                      </TableCell>
                    )
                  }

                  if (index + 1 === rowLength) {
                    return (
                      <React.Fragment>
                        <TableCell key={index}>
                          {data}
                          <span onClick={() => props.deleteRow(rowIndex)} style={{ marginLeft: 8 }}>
                            ❌
                          </span>
                        </TableCell>
                      </React.Fragment>
                    )
                  }

                  return <TableCell key={index}>{data}</TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

BasicTable.defaulProps = {
  deleteRow: {},
}

BasicTable.propTypes = {
  deleteRow: PropTypes.func,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.array.isRequired,
}

export default BasicTable
