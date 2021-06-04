import React from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Exit from '../../Components/Exit/Exit'


export default function Statistics(){
    const { id } = useParams()
    
    return(
        <div style={{padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 60}}>
            <Exit />
            <Link to={`/projects/${id}/changes`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, margin: 10, textAlign: 'center'}}>
                    <p>Статистика по созданию и изменению файлов и папок</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/visits`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, textAlign: 'center', margin: 10}}>
                    <p>Статистика посещения папок</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/used_space`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, textAlign: 'center', margin: 10}}>
                    <p>Статистика использованного пространства</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/iterations`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, textAlign: 'center', margin: 10}}>
                    <p>Статистика о текущей итерации проекта</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/stages_time`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, textAlign: 'center', margin: 10}}>
                    <p>Время, затраченное на стадии</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/tasks_time`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, textAlign: 'center', margin: 10}}>
                    <p>Время, затраченное на задачи</p>
                </div>
            </Link>
            <Link to={`/projects/${id}/links`}>
                <div style={{color: 'black', borderWidth: 1, borderColor: 'red', borderStyle: 'double', width: 300, height: 80, padding: 5, textAlign: 'center', margin: 10}}>
                    <p>Доступные ссылки</p>
                </div>
            </Link>
        </div>
    )
}