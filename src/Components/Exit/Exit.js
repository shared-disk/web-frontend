import React from 'react';
import { useHistory } from 'react-router-dom';


const Exit = ({id}) => {
    const history = useHistory()
    return(
        <div style={{cursor: 'pointer', borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, margin: 10, width: 100, textAlign: 'center', position: 'absolute', top: 10, right: 10}} onClick={() => {
            localStorage.removeItem('user_id')
            localStorage.removeItem('isManager')
            history.push('/')
            window.location.reload()
        }}>
            <p>Выйти</p>
        </div>
    )
}

export default Exit