import { Injectable } from '@nestjs/common';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createNote(name: string, content: string): Promise<void> {
    try {
      const noteReference = await addDoc(collection(db, 'test-notes'), {
        name,
        content,
        creationDate: new Date()
      })

      console.log('Document written with ID: ', noteReference.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
