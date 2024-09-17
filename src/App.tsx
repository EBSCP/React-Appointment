import React, { useState } from 'react';
import './App.css';
// Appointment tipi için bir arayüz oluşturuyoruz
interface Appointment {
    id: number;
    name: string;
    date: string;
}
function AppointmentSystem() {
    // appointments dizisi Appointment tipinde olacak
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const addAppointment = () => {
        setAppointments([...appointments, { id: Date.now(), name, date }]);
        setName('');
        setDate('');
    };

    const deleteAppointment =  (id:number) => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id ));
    };

    return (
       <>
           <h1 style= {{marginLeft:'500px'}}>Appointment Management System</h1>
        <div className="container">
            <div className="container-text">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={addAppointment}>Add Appointment</button>
            </div>

            <div className="container-result">
                <h1>Appointment List</h1>
                <ul>
                    <li>ID</li>
                    <li>NAME</li>
                    <li>DATE</li>
                </ul>
                {appointments.map((appointment) => (
                    <ul key={appointment.id}>
                        <li>{appointment.id}</li>
                        <li>{appointment.name}</li>
                        <li>{appointment.date}</li>
                        <li>
                            <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
       </>
    );
}

export default AppointmentSystem;
