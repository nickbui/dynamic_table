import { Component, input, OnInit, Signal, computed, effect, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Column } from './column';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css',
})
export class DynamicTableComponent<T> {
  tableColumns = input.required<Column[]>();
  tableData = input.required<T[]>();

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  displayedColumns: Signal<string[]> = computed(() =>
    this.tableColumns().map((c) => c.columnDef)
  );

  dataSource = new MatTableDataSource<T>();

  constructor() {
    effect(() => {
      this.dataSource.data = this.tableData();
    });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
