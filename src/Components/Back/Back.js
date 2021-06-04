import React from 'react';
import { useHistory } from 'react-router-dom';


const Back = ({id}) => {
    const history = useHistory()
    return(
        <div style={{cursor: 'pointer', borderColor: 'red', borderWidth: 1, borderStyle: 'double', borderRadius: 15, borderWidth: 1, margin: 10, width: 150, textAlign: 'center'}} onClick={() => history.goBack()}>
            <p>Вернуться назад</p>
        </div>
    )
}

export default Back