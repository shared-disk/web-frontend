import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import Exit from '../../Components/Exit/Exit'
import { useParams } from 'react-router';


export default function Links() {
    const [links, setLinks] = React.useState({})
    const { id } = useParams()

    React.useEffect(() => {
        axios({
            method: 'post',
            url: '/web/links',
            data: {
                project_id: id,
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setLinks(response.data)
        })
    }, [])

    return(
        <div style={{paddingTop: 80}}>
            <Exit />
            <Back />
            <h2 style={{marginLeft: 20}}>Доступные ссылки</h2>
            {Object.keys(links).map(item => {
                if (item === 'general')
                    return(
                        <>
                        <h3 style={{ marginLeft: 10, marginBottom: 5}}>{item}</h3>
                        <div style={{ margin: 10, borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                            <p style={{margin: 10}}><a href={links[item]}>{links[item]}</a></p>
                        </div>
                        </>
                    )
                if(links[item] !== null && item !== 'general')
                return(
                    <>
                    <h3 style={{ marginLeft: 10, marginBottom: 5}}>{item}</h3>
                    <div style={{ margin: 10, borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                        {Object.keys(links[item]).map(elem => {
                            return(
                                <p style={{margin: 10}}>{elem}: <a href={links[item][elem]}>{links[item][elem]}</a></p>
                            )
                        })}
                    </div>
                    </>
                )
            })}
        </div>
    )
}