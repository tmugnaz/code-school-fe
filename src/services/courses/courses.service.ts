import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/model/dtos/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private URL = 'http://localhost:8080/api/course';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.URL}/`);
  }

  createCourse(courseData: Course): Observable<Course> {
    return this.http.post<Course>(`${this.URL}/`, courseData);
  }
}
