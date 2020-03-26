import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { uuid } from 'uuidv4'

const columns = [
  { id: 'country', label: 'Country Name', minWidth: 170 },
  { id: 'cases', label: 'Cases', minWidth: 100 },
  { id: 'todayCases', label: 'Today Cases', minWidth: 100 },
  {
    id: 'deaths',
    label: 'Total Deaths',
    minWidth: 100
  },
  {
    id: 'todayDeaths',
    label: 'Today Deaths',
    minWidth: 100
  },
  {
    id: 'recovered',
    label: 'Patients recovered',
    minWidth: 100
  },
  {
    id: 'active',
    label: 'Active Patients',
    minWidth: 100
  },
  {
    id: 'critical',
    label: 'Critical Patients',
    minWidth: 100
  },
  {
    id: 'casesPerOneMillion',
    label: 'Cases per million',
    minWidth: 50
  }
]

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  }
})

export default function StickyHeadTable(props) {
  const { countries } = props
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  var rows = []

  const generateOutPutData = countries => {
    rows = countries.filter(c => c.country)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  if (countries) {
    generateOutPutData(countries)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={uuid()}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell align={column.align} key={uuid()}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
