import { Component, OnInit, Inject, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Contact } from './contact';

export interface ContactData {
  closeResult: string;
  contacts: Contact[];
  searchText: any;
  txtContactname: string;
  txtContactPost: string;
  txtContactadd: string;
  txtContactno: string;
  txtContactinstagram: string;
  txtContactlinkedin: string;
  txtContactfacebook: string;
}

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
  closeResult = '';
  contacts: Contact[] = [];
  searchText: any;
  txtContactname = '';
  txtContactPost = '';
  txtContactadd = '';
  txtContactno = '';
  txtContactinstagram = '';
  txtContactlinkedin = '';
  txtContactfacebook = '';

  constructor(public dialog: MatDialog) {}

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogContent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addContact(result.data);
      }
    });
  }

  ngOnInit() {
    this.contacts = [
      {
        contactimg: 'assets/images/users/2.jpg',
        contactname: 'Alain Camarena',
        contactpost: 'Web Designer',
        contactadd: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107',
        contactno: '(123) 456-7890',
        contactinstagram: '25',
        contactlinkedin: '5',
        contactfacebook: '15'
      },
      {
        contactimg: 'assets/images/users/8.jpg',
        contactname: 'Gloaria Chavez',
        contactpost: 'Theme Designer',
        contactadd: '55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ',
        contactno: '(212) 228-8403',
        contactinstagram: '15',
        contactlinkedin: '1',
        contactfacebook: '16'
      },
      {
        contactimg: 'assets/images/users/4.jpg',
        contactname: 'Guillermo Rosas',
        contactpost: 'Front End Developer',
        contactadd: '36 W 138th St, San Francisco New York, NY, 10037',
        contactno: '(212) 234-0783',
        contactinstagram: '30',
        contactlinkedin: '6',
        contactfacebook: '13'
      },
      {
        contactimg: 'assets/images/users/5.jpg',
        contactname: 'El Chapo',
        contactpost: 'Hacker',
        contactadd: '2289 5th Ave, Suite 600 San Francisco New York, NY, 10037',
        contactno: '(212) 456-8403',
        contactinstagram: '22',
        contactlinkedin: '3',
        contactfacebook: '17'
      },
      {
        contactimg: 'assets/images/users/6.jpg',
        contactname: 'Yung Hum Himchimoko',
        contactpost: 'Back End Developer',
        contactadd: '425 5th Ave, San Francisco New York, NY, 10016',
        contactno: '(154) 456-8745',
        contactinstagram: '65',
        contactlinkedin: '15',
        contactfacebook: '19'
      },
      {
        contactimg: 'assets/images/users/7.jpg',
        contactname: 'Jorge Campos',
        contactpost: 'Graphics Designer',
        contactadd: '17 Stuyvesant Walk, Suite 600 New York, NY, 10009',
        contactno: '(150) 784-7890',
        contactinstagram: '15',
        contactlinkedin: '2',
        contactfacebook: '16'
      }
    ];
  }

  addContact(row_obj: ContactData) {
    this.contacts.push({
      contactimg: 'assets/images/users/6.jpg',
      contactname: row_obj.txtContactname,
      contactpost: row_obj.txtContactPost,
      contactadd: row_obj.txtContactadd,
      contactno: row_obj.txtContactno,
      contactinstagram: row_obj.txtContactinstagram,
      contactlinkedin: row_obj.txtContactlinkedin,
      contactfacebook: row_obj.txtContactfacebook
    });
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html'
})
// tslint:disable-next-line: component-class-suffix
export class DialogContent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactData
  ) {
    // console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
