export interface Column{
    columnDef: string; //key from datasource
    header: string; //value which will be show as Column header
    cell: Function; // will define a function to get value from datasource
    type: 'string'|'number'|'date'; //type of data
    isSortable?: boolean; //is it sortable?
}