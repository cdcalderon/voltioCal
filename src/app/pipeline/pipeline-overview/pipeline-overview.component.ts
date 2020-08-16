import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { TicketDialogContent } from '../dialog-content.component';
import { TicketElement } from '../ticketElement';

const tickets: TicketElement[] = [
  {
    id: 77,
    creator: 'Eric Pratt',
    title: 'Elegant Theme Side Menu show OnClick',
    assignee: 'Alice Bohr',
    status: 'In Progress',
    labelbg: 'warning',
    product: '2018-04-01',
    date: '2018-05-01',
    imagePath: 'assets/images/users/2.jpg'
  },
  {
    id: 78,
    creator: 'Steve',
    title: 'Xtreme theme dropdown issue',
    assignee: 'Jonathan',
    status: 'Open',
    labelbg: 'success',
    product: '2018-04-03',
    date: '2018-05-03',
    imagePath: 'assets/images/users/4.jpg'
  },
  {
    id: 79,
    creator: 'Mark',
    title: 'Header issue in material admin',
    assignee: 'Smith J',
    status: 'Closed',
    labelbg: 'danger',
    product: '2018-04-02',
    date: '2018-05-02',
    imagePath: 'assets/images/users/3.jpg'
  },
  {
    id: 80,
    creator: 'John Doe',
    title: 'Sidebar issue in Nice admin',
    assignee: 'Vincent',
    status: 'In Progress',
    labelbg: 'warning',
    product: '2018-04-06',
    date: '2018-05-06',
    imagePath: 'assets/images/users/5.jpg'
  },
  {
    id: 81,
    creator: 'Jennifer',
    title: 'Elegant Theme Side Menu show OnClick',
    assignee: 'Chris Martin',
    status: 'Open',
    labelbg: 'success',
    product: '2018-04-04',
    date: '2018-05-04',
    imagePath: 'assets/images/users/6.jpg'
  },
  {
    id: 82,
    creator: 'Harper',
    title: 'Header issue in admin pro admin',
    assignee: 'James F',
    status: 'Closed',
    labelbg: 'danger',
    product: '2018-03-03',
    date: '2018-05-03',
    imagePath: 'assets/images/users/7.jpg'
  },
  {
    id: 83,
    creator: 'Billy John',
    title: 'Elegant Theme Side Menu OnClick',
    assignee: 'Jonathan',
    status: 'In Progress',
    labelbg: 'warning',
    product: '2018-02-05',
    date: '2018-05-05',
    imagePath: 'assets/images/users/3.jpg'
  },
  {
    id: 84,
    creator: 'Allen Brook',
    title: 'adminpress Theme Side Menu not opening',
    assignee: 'Smith J',
    status: 'Open',
    labelbg: 'success',
    product: '2018-02-04',
    date: '2018-05-04',
    imagePath: 'assets/images/users/6.jpg'
  },
  {
    id: 85,
    creator: 'Olivia Hart',
    title: 'Charts not proper in xtreme admin',
    assignee: 'Markus',
    status: 'Closed',
    labelbg: 'danger',
    product: '2018-03-02',
    date: '2018-05-02',
    imagePath: 'assets/images/users/5.jpg'
  },
  {
    id: 86,
    creator: 'Luis Orys',
    title: 'Psd not availabel with package',
    assignee: 'Jane',
    status: 'Closed',
    labelbg: 'danger',
    product: '2018-01-03',
    date: '2018-05-03',
    imagePath: 'assets/images/users/8.jpg'
  }
];
@Component({
  templateUrl: './pipeline-overview.component.html',
  styleUrls: ['./pipeline-overview.component.scss']
})
export class PipelineOverviewComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(
    null
  );
  constructor(public dialog: MatDialog) {}
  searchText: any;
  totalCount = -1;
  Closed = -1;
  Inprogress = -1;
  Open = -1;

  displayedColumns: string[] = [
    'creator',
    'title',
    'assignee',
    'status',
    'product',
    'date'
  ];
  dataSource = new MatTableDataSource(tickets);

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(TicketDialogContent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: TicketElement) {
    const d = new Date();
    this.dataSource.data.push({
      id: d.getTime(),
      creator: row_obj.creator,
      title: row_obj.title,
      assignee: row_obj.assignee,
      status: row_obj.status,
      labelbg: row_obj.labelbg,
      product: row_obj.product,
      date: row_obj.date
    });
    this.table.renderRows();
  }
  updateRowData(row_obj: TicketElement) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id === row_obj.id) {
        value.creator = row_obj.creator;
        value.title = row_obj.title;
        value.assignee = row_obj.assignee;
        value.status = row_obj.status;
        value.labelbg = row_obj.labelbg;
        value.product = row_obj.product;
        value.date = row_obj.date;
      }
      return true;
    });
  }
  deleteRowData(row_obj: TicketElement) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== row_obj.id;
    });
  }

  ngOnInit() {
    this.totalCount = this.dataSource.data.length;
    this.Open = this.btnCategoryClick('Open');
    this.Closed = this.btnCategoryClick('Closed');
    this.Inprogress = this.btnCategoryClick('In Progress');
    this.dataSource = new MatTableDataSource(tickets);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  btnCategoryClick(val: string) {
    this.dataSource.filter = val.trim().toLowerCase();
    return this.dataSource.filteredData.length;
  }
}
