import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  setDoc,
  deleteDoc,
  docSnapshots,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { IJogador, createIJogador } from 'src/models/jogador.model';

@Injectable({ providedIn: 'root' })
export class Jogador {
  private jogadores: IJogador[] = [];

  constructor(public firestore: Firestore) {}

  public getAll(): Observable<IJogador[]> {
    const tCollection = collection(this.firestore, 'jogadores');
    return collectionData(tCollection, { idField: 'id' }).pipe(
      map((jogadores) => jogadores as IJogador[])
    );
  }

  //create a function to get a player by id, returning a IJogador in firebase
  public get(id: string): Observable<IJogador> {
    const tCollection = collection(this.firestore, 'jogadores');
    const tDoc = doc(tCollection, id);
    return docSnapshots(tDoc).pipe(
      map((doc) => {
        if (doc.exists()) {
          const jogador = doc.data() as IJogador;
          return jogador;
        } else {
          return null;
        }
      })
    );
  }

  public async add(novoJogador: IJogador): Promise<IJogador> {
    const docRef = await addDoc(collection(this.firestore, 'jogadores'), {
      id: novoJogador.id,
      nome: novoJogador.nome,
      estrelas: novoJogador.estrelas,
      presente: novoJogador.presente,
    });

    let uid: any = Date.now();
    uid = uid.toString(16);

    novoJogador.id = uid;

    this.jogadores.push(novoJogador);
    return this.jogadores[this.jogadores.length - 1];
  }

  public getIndex(id: string): number {
    const index = this.jogadores.findIndex((obj) => {
      return obj.id === id;
    });
    return index;
  }

  public update(jogadorToEdit: IJogador, id: string): void {
    const document = doc(this.firestore, 'jogadores', id);
    setDoc(document, jogadorToEdit);
  }

  public delete(id: string): void {
    const document = doc(this.firestore, 'jogadores', id);
    deleteDoc(document);
  }
}
