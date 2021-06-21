import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  single: string[] = [
    'Header',
    'Footer',
    'Sidenav',
    'Breadcrumbs',
    'Language Menu',
    'Profile Menu',
  ];
  multi: string[] = [
    'Task Card',
    'Contact Card',
    'Quick Link Card',
    'Logo',
    'Nav List',
    'Search Bar',
    'Dialog',
    'Table Scroll Indicator',
    'File Uploader',
    'Section Title',
    'Table',
    'Form'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
