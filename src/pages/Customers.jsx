import React from 'react'
import { GridComponent, ColumnsDirective, Page, Selection, Edit, Inject, ColumnDirective, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid,  } from '../data/dummy';

import { Header} from '../components'
import { Category } from '@syncfusion/ej2-react-charts';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent dataSource={customersData} allowPaging allowSorting width='auto' toolbar={['Delete']} editSettings={{allowDeleting: true, allowEditing: true}}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index}{...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>


  )
}


export default Employees