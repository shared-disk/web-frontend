import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import { useParams } from 'react-router';


export default function Changes() {
    const [changes, setChanges] = React.useState([])
    const { id } = useParams()

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

    return(
        <div>
            <Back />
            {changes.map(item => {
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