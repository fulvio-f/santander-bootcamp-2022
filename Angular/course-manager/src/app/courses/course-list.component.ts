import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: "",
                price: 29,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.7,
                releaseDate: 'July, 18, 2022'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: "",
                price: 39,
                code: 'LKL-8796',
                duration: 90,
                rating: 4.9,
                releaseDate: 'July, 19, 2022'
            }
        ]
    }
}