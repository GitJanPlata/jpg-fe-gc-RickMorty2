import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(`${this.baseUrl}/character`);
  }

  getCharacter(characterId: string) {
    return this.http.get(`${this.baseUrl}/character/${characterId}`);
  }
}