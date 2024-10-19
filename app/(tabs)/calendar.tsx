import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../styles/calendarStyles';
import axiosInstance from '../services/axiosInstance';

export default function CalendarScreen() {
    const [selectedDate, setSelectedDate] = useState('');
    const [apiResponse, setApiResponse] = useState('');

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const handleGetRequest = () => {
        axiosInstance.get('/User')
            .then(response => {
                setApiResponse(JSON.stringify(response.data, null, 2));
            })
            .catch(error => {
                console.error('GET Request error', error);
            });
    }

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
        </View>
    );
}