import React from 'react'
import Tabs from './tab-test'


function RandomContent (){
    return <h1>Some Random Content</h1>
}

const TabTest = () => {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is div for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, assumenda!</div>
        },
        {
            label: 'Tab 3',
            content: <RandomContent/>
        },
        
    ]
    
    function handleChange(CurrentTabIndex){
    }
  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default TabTest