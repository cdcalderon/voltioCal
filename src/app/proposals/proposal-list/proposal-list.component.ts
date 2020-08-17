import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { course } from './course';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.scss']
})
export class ProposalListComponent implements OnInit {
  courseList: course[] = [];
  selectedCategory = 'All';

  constructor(private courseService: CourseService) {
    this.courseList = this.courseService.getCourse();
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.courseList = this.filter(filterValue);
  }

  filter(v: string) {
    return this.courseService
      .getCourse()
      .filter(x => x.courseName.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  ddlChange(ob: any) {
    const filterValue = ob.value;

    if (filterValue === 'All') {
      this.courseList = this.courseService.getCourse();
    } else {
      this.courseList = this.courseService
        .getCourse()
        // tslint:disable-next-line: no-shadowed-variable
        .filter(course => course.courseType === filterValue);
    }

    // this.todos.filter(course => course.courseType==filterValue);
  }
}
