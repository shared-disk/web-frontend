import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import Exit from '../../Components/Exit/Exit'
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { useParams } from 'react-router';


export default function Changes() {
    const [changes, setChanges] = React.useState([])
    const { id } = useParams()
    const [firstDate, setFirstDate] = React.useState(new Date());
    const [secondDate, setSecondDate] = React.useState(new Date());

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/create_or_edit_file_folder',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setChanges(response.data.table)
        })
    }, [])

    const handleFirstDateChange = (date) => {
        setFirstDate(date);
      };

    const handleSecondDateChange = (date) => {
        setSecondDate(date);
      };


    return(
        <div style={{paddingTop: 80}}>
            <Exit />
            <Back />
            <h2 style={{marginLeft: 20}}>Статистика по созданию и изменению файлов и папок</h2>
            
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={firstDate}
                    onChange={handleFirstDateChange}
                    label="От"
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={secondDate}
                    onChange={handleSecondDateChange}
                    label="До"
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
            <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableBody>
                {changes.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell align="center">{row[0]}</TableCell>
                        <TableCell align="center">{row[1]}</TableCell>
                        <TableCell align="center">{row[2]}</TableCell>
                        <TableCell align="center">{row[3]}</TableCell>
                        <TableCell align="center">{row[4]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}