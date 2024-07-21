import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '../styles/exploreStyles';
import ListingCard from '@/components/ListingCard';
import { dummyListingData } from '../testData/data';

export default function ExploreScreen() {
    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchOpen = () => {
        setIsSearchVisible(true);
    };

    const handleSearchClose = () => {
        setIsSearchVisible(false);
    };

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View>
            <TouchableOpacity onPress={handleSearchOpen} style={styles.searchButton}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="search" size={20} color="#000" />
                <ThemedText style={styles.searchButtonText}>Search</ThemedText>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={false}
              visible={isSearchVisible}
              onRequestClose={handleSearchClose}>
              <View style={styles.modalContainer}>
              <TouchableOpacity onPress={handleSearchClose} style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 1}}>
                  <View style={styles.closeSearch}>
                      <Icon name="close" size={24} color="#000" />
                  </View>
              </TouchableOpacity>
                  <View>
                      <TextInput
                          style={styles.searchInput}
                          placeholder="Search..."
                          value={searchText}
                          onChangeText={setSearchText}
                      />
                  </View>
              </View>
            </Modal>
            {dummyListingData.map((item) => (
                <ListingCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
            </View>
        </ScrollView>
    );
}
