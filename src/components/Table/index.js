import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontSize: 10,
    padding: " 15px"
  },
  body: {
    fontSize: 10,
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  thead:{
    border: "1px solid #DDDFE1",
    fontSize: 10,
    fontweight: 500
  }
});

export default function CustomizedTables(props) {
  const {tableData} =props;
  const classes = useStyles();

  return (
    <div style={{
      padding: "25px 25px 0px 25px"
    }}>
<TableContainer >
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.thead}>
          <TableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >City</StyledTableCell>
            <StyledTableCell >Pincode</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Phone</StyledTableCell>
            <StyledTableCell >DOB</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell >
                {row.name.first} {row.name.last}
              </StyledTableCell>
              <StyledTableCell >{row.location.city}</StyledTableCell>
              <StyledTableCell >{row.location.postcode}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell >{row.cell}</StyledTableCell>
              <StyledTableCell >{moment(row.dob.date).format("DD MMM YYYY")}</StyledTableCell>
              
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  
  );
}
