

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PersonForm from '../components/PersonForm';


const UpdatePerson = (props) => {

    const { id } = useParams();
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    

    const updatePerson = personParam => {
        axios.put('http://localhost:8000/api/people/' + id, 
        personParam)
            .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {
            loaded && <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName}
            initialLastName={person.lastName}
            />
            }
        </div>
    )
}

export default UpdatePerson;