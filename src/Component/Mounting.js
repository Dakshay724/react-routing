import React from 'react'
 
export default function Mounting() {
  return (
   <div>
    <p><h2> Mounting</h2>
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
<ul>
<li> constructor()</li>
<li>static getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li>
</ul></p>
    </div>
  )
}
