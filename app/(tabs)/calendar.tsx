import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../styles/calendarStyles';
import {userService} from '../../services/axiosInstance';

export default function CalendarScreen() {
    const [selectedDate, setSelectedDate] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [driversLicenseNumber, setDriversLicenseNumber] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [abn, setAbn] = useState('');


    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const handleGetRequest = () => {
        userService.get('/User')
            .then(response => {
                setApiResponse(JSON.stringify(response.data, null, 2));
            })
            .catch(error => {
                console.error('GET Request error', error);
            });
    };

    const handlePostRequest = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            userContactDetails: {
                id: 0,
                email: email,
                phoneNumber: phoneNumber
            },
            userVerificationDetails: {
                id: 0,
                driversLicenseNumber: driversLicenseNumber,
                passportNumber: passportNumber,
                abn: abn
            }
        };
        userService.post('/User', data)
            .then(response => {
                console.log('POST Request success', response.data);
                setApiResponse(JSON.stringify(response.data, null, 2));
            })
            .catch(error => {
                console.error('POST Request error', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select a Date for Booking</Text>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: { selected: true, marked: true, selectedColor: 'grey' },
                }}
                theme={{
                    selectedDayBackgroundColor: '6699CC',
                    todayTextColor: '6699CC',
                    arrowColor: '6699CC',
                }}
            />
            {selectedDate ? (
                <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
            ) : null}
            <Button title="Send GET Request" onPress={handleGetRequest} />
            <Text>API Response: {apiResponse}</Text>

            <Text>Send POST Request</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Driver's License Number"
                value={driversLicenseNumber}
                onChangeText={setDriversLicenseNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Passport Number"
                value={passportNumber}
                onChangeText={setPassportNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="ABN"
                value={abn}
                onChangeText={setAbn}
            />
            <Button title="Submit" onPress={handlePostRequest} />
        </View>
    );
}