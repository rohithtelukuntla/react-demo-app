import React from 'react'
import Employee from './Employee'
import Employee2 from './Employee2'
import Employee3 from './Employee3'
import Employee4 from './Employee4'
import Employee5 from './Employee5'
import Employee6 from './Employee6'
import Employee7 from './Employee7'
import StyledCompTemplate from './StyledCompTemplate'
export default function Main() {
  return (
    <>
    <Employee id={101} name="Rohith" desg="PM"/>
    <Employee2 id={102}  name="rohith1" desg="PM" sal={90000} gender="male"/>
    <Employee3 info={{id:110, name:"Nalini" ,desg:"QA"}}/>
    <Employee3 info={[120]}/>
    <Employee4 id={101} desg="PM"/>
    <Employee5 id={105}   desg="PM"/>
    <Employee6 id={106} desg="PM" dept="technical"/>
    <Employee7 id={108} desg="PL" dept="technical"/>
    <StyledCompTemplate/>
    </>
  )
}
