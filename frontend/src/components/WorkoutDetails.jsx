import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleDelete = async () => {
        if(!user) {
            return
        }

        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const data = await response.json();

        if(response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: data })
        }
    }

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleDelete}>Delete</span>
        </div>
    )
}
