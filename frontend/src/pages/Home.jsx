import { useState, useEffect } from 'react'

// components
import WorkoutDetails from "../components/WorkoutDetails"

export default function Home() {
    const [workouts, setWorkouts] = useState(null)
    console.log(workouts)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const data = await response.json()

            if(response.ok) {
                setWorkouts(data)
            }
        }

        fetchWorkouts();
    }, [])

    return (
        <div className='home'>
            <div className='workouts'>
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}
