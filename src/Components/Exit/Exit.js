import React from 'react';
import { useHistory } from 'react-router-dom';


const Exit = ({id}) => {
    const history = useHistory()
    return(
        <div style={{position: 'absolute', width: '100%', borderBottomWidth: 1, borderBottomColor: 'red', borderBottomStyle: 'solid'}}>
            <h2 style={{position: 'absolute', left: 10, top: -75, cursor: 'pointer'}} onClick={() => history.push('/')}>Shared Disk</h2>
            <div style={{cursor: 'pointer', borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, margin: 10, width: 100, textAlign: 'center', position: 'absolute', right: 10, top: -75}} onClick={() => {
                localStorage.removeItem('user_id')
                localStorage.removeItem('isManager')
                history.push('/')
                window.location.reload()
            }}>
                <p>Выйти</p>
            </div>
        </div>
    )
}

export default Exit