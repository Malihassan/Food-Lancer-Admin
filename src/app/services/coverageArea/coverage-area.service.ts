import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CoverageAreaService {
  constructor(private http: HttpClient) {}
  getCoverageAreaList(pageNum: number,query:string) {
    return this.http.get(
      `/admin/coverageArea?page=${pageNum}&searchValue=${query}`,
    );
  }
  insertCoverageAreaList(data: any) {
    console.log('Service Insert');
    return this.http.post(`/admin/coverageArea`, data);
  }
  deleteCoverageArea(id: any) {
    return this.http.delete(`/admin/coverageArea/${id}`);
  }
}