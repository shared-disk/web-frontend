import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom'


export default function Report() {
    const [report, setReport] = React.useState('')
    const { id } = useParams()
    const history = useHistory()

    const sendReport = () => {
        axios({
            method: 'post',
            url: '/report',
            data: {
                project_id: id,
                text: report,
            }
        })
        .then(response => {
            history.push(`/projects/${id}`)
        })
    }

    return(
        <div style={{padding: 20}}>
            <Back />
            <input type={'text'} value={report} onChange={e => setReport(e.target.value)} placeholder='Информация о проблеме..' /><br/>
            <button type={'button'} style={{width: 100}}>Отправить</button> 
        </div>
    )
}