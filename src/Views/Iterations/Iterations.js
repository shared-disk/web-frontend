import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import Exit from '../../Components/Exit/Exit'
import { useParams } from 'react-router';


export default function Iterations() {
    const [iterations, setIterations] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/info_about_iterations',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setIterations(response.data)
        })
    }, [])

    return(
        <div style={{paddingTop: 80}}>
            <Exit />
            <Back />
            <h2 style={{marginLeft: 20}}>Статистика о текущей итерации проекта</h2>
            {Object.keys(iterations).map(item => {
                if(iterations[item] !== null)
                return(
                    <>
                    <h3 style={{ marginLeft: 10, marginBottom: 5}}>{item}</h3>
                    <div style={{ margin: 10, borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                        {Object.keys(iterations[item]).map(elem => {
                            return(
                                <p style={{margin: 10, color: iterations[item][elem] === 0 ? 'gray' : 'black', fontSize: [0,2].includes(iterations[item][elem]) ? 15 : 20}}>{elem}</p>
                            )
                        })}
                    </div>
                    </>
                )
            })}
        </div>
    )
}