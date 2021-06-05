import React from 'react';
import axios from 'axios';
import Back from '../../Components/Back/Back'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom'


export default function Report() {
    return(
        <div style={{padding: 20}}>
            <Back />
            <p>Оставьте своё техническое задание по <a href='https://drive.google.com/drive/folders/1s99fimQUDDrtxzf4lk2XR497HZrSfQOd?usp=sharing'>ссылке</a></p>
        </div>
    )
}