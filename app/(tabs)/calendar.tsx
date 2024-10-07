import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../styles/calendarStyles';

export default function CalendarScreen() {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
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
        </View>
    );
}