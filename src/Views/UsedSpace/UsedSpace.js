import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import { useParams } from 'react-router';


export default function UsedSpace() {
    const [usedSpace, setUsedSpace] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/used_disk_space',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setUsedSpace(response.data)
        })
    }, [])

    return(
        <div>
            <Back />
            {Object.keys(usedSpace).map(item => {
                if(usedSpace[item] !== null)
                return(
                    <>
                    <h3 style={{ marginLeft: 10, marginBottom: 5}}>{item}</h3>
                    <div style={{ margin: 10, borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {Object.keys(usedSpace[item]).map(elem => {
                            return(
                                <p style={{margin: 10}}>{elem}: {usedSpace[item][elem]}</p>
                            )
                        })}
                    </div>
                    </>
                )
            })}
        </div>
    )
}