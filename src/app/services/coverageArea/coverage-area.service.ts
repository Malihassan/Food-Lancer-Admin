import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoverageAreaService {
  constructor(private http: HttpClient) {}
  getCoverageAreaList(pageNum: number) {
    return this.http.get(`http://localhost:3000/coverageArea?page=${pageNum}`);
  }
  insertCoverageAreaList(data: any) {
    console.log('Service Insert');
    return this.http.post(`http://localhost:3000/coverageArea`, data);
  }
  deleteCoverageArea(id: any) {
    return this.http.delete(`http://localhost:3000/coverageArea/${id}`);
  }
}
