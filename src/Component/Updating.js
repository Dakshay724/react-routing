import React from 'react'

export default function Updating() {
  return (
    <div>
    <p><h2> Updating</h2>
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
<ul>
<li> static getDerivedStateFromProps()</li>
<li>shouldComponentUpdate()</li>
<li>render()</li>
<li>getSnapshotBeforeUpdate()</li>
<li>componentDidUpdate()</li>
</ul></p>
    </div>
  )
}
