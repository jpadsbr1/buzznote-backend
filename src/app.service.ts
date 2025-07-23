import { Injectable, Logger } from '@nestjs/common';
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { Note } from './entities/note.entity';
import { UpdateNoteDto } from './dto/updateNote.dto';
import { CreateNoteDto } from './dto/createNote.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<void> {
    try {
      const note = await addDoc(collection(db, 'test-notes'), {
        ...createNoteDto,
        creationDate: new Date().toISOString()
      })

      console.log('Document written with ID: ', note.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getAllNotes(): Promise<Note[]> {
    const notesSnapshot = await getDocs(collection(db, 'test-notes'))

    const notes: Note[] = []

    notesSnapshot.forEach((doc) => {
      notes.push({
          id: doc.id,
          name: doc.data().name,
          content: doc.data().content,
          creationDate: doc.data().creationDate
      })
    })

    return notes
  }

  async deleteNote(noteId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'test-notes', noteId));
      console.log('Document deleted with ID: ', noteId);
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  }

  async updateNote(noteId: string, updateNoteDto: UpdateNoteDto): Promise<void> {
    try {
      await updateDoc(doc(db, 'test-notes', noteId), {
        ...updateNoteDto
      });
      console.log('Document updated with ID: ', noteId);
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  } 
}
