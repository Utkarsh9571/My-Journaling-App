import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { addGlobalEntry } from '../../lib/globalJournalData';

const { width } = Dimensions.get('window');
const CARD_MAX_WIDTH = 512;

export default function AddEntryScreen() {
  const [entryText, setEntryText] = useState<string>('');
  const navigation = useNavigation(); 

  const handleAddEntry = () => {
    if (entryText.trim() === '') {
      Alert.alert('Cannot Add Empty Entry', 'Please write something before adding to your journal.');
      return;
    }

    addGlobalEntry(entryText);
    setEntryText('');

    Alert.alert('Success', 'Journal entry added!');

    navigation.navigate('entries' as never);

  };

  return (
    <View style={styles.screenContainer}>
    <View style={styles.cardContainer}>
      <Text style={styles.title}>What's on your mind?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write your thoughts here..."
        placeholderTextColor={Colors.textColorSecondary}
        multiline
        numberOfLines={6}
        value={entryText}
        onChangeText={(text: string) => setEntryText(text)}
      />
      <Button
        title="Add Entry"
        onPress={handleAddEntry}
        disabled={entryText.trim() === ''}
        color={entryText.trim() === '' ? Colors.primaryLight: Colors.primary}
      />
    </View></View>
  );
}
const Colors = {
  primary: '#6A8EF6', // Soft Blue
  primaryLight: '#B0C4DE', // Lighter Blue for disabled states
  background: '#F5F7FA', // Very light grey
  cardBackground: '#FFFFFF', // Pure White
  borderColor: '#E0E0E0', // Light grey border
  textColorPrimary: '#343A40', // Dark Charcoal
  textColorSecondary: '#6C757D', // Medium Grey
  inputBg: '#FFFFFF', // White input background
};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  cardContainer: {
    width: width > CARD_MAX_WIDTH ? CARD_MAX_WIDTH : '100%', // Responsive width
    backgroundColor: Colors.cardBackground,
    padding: 30,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 28,
    color: Colors.textColorPrimary,
  },
  textInput: {
    width: '100%',
    height: 160,
    padding: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
    fontSize: 18,
    color: Colors.textColorPrimary,
    backgroundColor: Colors.inputBg,
    textAlignVertical: 'top',
  },
});