import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import './Projects.css'


export default function Projects() {
    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        console.log(Boolean(localStorage.getItem('isManager')))
        axios({
            method: 'post',
            url: '/web/projects',
            data: {
                id: localStorage.getItem('user_id'),
                ismanager: localStorage.getItem('isManager') === 'true' ? true : false
            }
        })
        .then(response => {
            setProjects(response.data.projects)
        })
        .catch(err => {
            console.warn(err)
        })
    }, [])

    return(
        <div style={{padding: 20}}>
            {projects.map(item => {
                return(
                    <div style={{borderColor: 'red', borderWidth: 1, borderStyle: 'double', width: 300, padding: 10}}>
                        <h3>{item.name}</h3>
                        <p>Менеджер: {item.manager}</p>
                        <p>Клиент: {item.customer}</p>
                    </div>
                )
            })}
        </div>
    )
}