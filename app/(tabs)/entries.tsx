import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { globalJournalEntries } from '../../lib/globalJournalData';
import { JournalEntry } from '../../src/types/index';

const { width } = Dimensions.get('window');
const CARD_MAX_WIDTH = 512;

export default function ViewEntriesScreen() {

  const [currentEntries, setCurrentEntries] = useState<JournalEntry[]>([]);

  useFocusEffect(
    React.useCallback(() => {
    setCurrentEntries([...globalJournalEntries]);
  }, [])
  );

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Your Journal Entries</Text>
      {currentEntries.length === 0 ? (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>No Entries yet. Go to "Add Entry" to write something!</Text>
        </View>
      ) : (
          <FlatList 
            data={currentEntries}
            keyExtractor={(item: JournalEntry) => item.id}
            renderItem={({ item }: { item: JournalEntry }) => (
                <View style={styles.entryCard}>
                  <Text style={styles.entryDate}>{item.date}</Text>
                  <Text style={styles.entryText}>{item.text}</Text>
                </View>
            )} 
            contentContainerStyle={styles.flatListContent}
          />
        )}
    </View>
  );
}


const Colors = {
  background: '#F5F7FA', // Very light grey
  cardBackground: '#FFFFFF', // Pure White
  borderColor: '#E0E0E0', // Light grey border
  textColorPrimary: '#343A40', // Dark Charcoal
  textColorSecondary: '#6C757D', // Medium Grey
};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 28,
    color: Colors.textColorPrimary,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
    color: Colors.textColorSecondary,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  entryCard: {
    width: width > CARD_MAX_WIDTH ? CARD_MAX_WIDTH : '100%', // Responsive width
    alignSelf: 'center',
    backgroundColor: Colors.cardBackground,
    padding: 24,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  entryDate: {
    fontSize: 14,
    color: Colors.textColorSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  entryText: {
    fontSize: 17,
    color: Colors.textColorPrimary,
    lineHeight: 25,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
