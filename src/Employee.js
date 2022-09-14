import React from 'react'

export default function Employee() {
    let employees=[{"id": 101, "name": "BHanu", "desg": "PM","sal":9000000},
    {"id": 102, "name": "BHavya", "desg": "PL","sal":8000000},
    {"id": 103, "name": "CHandu", "desg": "TM","sal":7000000},
    {"id": 104, "name": "CHaran", "desg": "TL","sal":6000000},
    {"id": 105, "name": "Bunny", "desg": "QA","sal":5000000}]
  return (
    <table className='table table-bordered table-striped'>
        <tbody>
            <tr>
                <th>EmpId</th>
                <th>EmpName</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
    {
        employees.map(emp=>{
            return <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.desg}</td>
                <td>{emp.sal}</td>
            </tr>
        })
    }
    </tbody>
    </table>
  )
}
