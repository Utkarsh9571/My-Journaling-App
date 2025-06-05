// app/globalJournalData.ts
import { JournalEntry } from '../src/types/index';

export const globalJournalEntries: JournalEntry[] = [];

export function addGlobalEntry(text: string): void {
  const newEntry: JournalEntry = {
    id: Date.now().toString(),
    text: text,
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  };
  globalJournalEntries.unshift(newEntry);
}