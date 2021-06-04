import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import { useParams } from 'react-router';


export default function Visits() {
    const [visits, setVisits] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/visit',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setVisits(response.data.table)
        })
    }, [])

    return(
        <div>
            <Back />
            {visits.map(item => {
                return(
                    <div style={{ margin: 10, borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {item.map(elem => {
                            return(
                                <p style={{margin: 10}}>{elem}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}