import React from 'react'

import HeaderSection from '../shared/HeaderSection'
import WelcomeMessage, { WelcomeMessageAlternative, WelcomeMessageDestructing } from './WelcomeMessage'
import ChildrenParam from './ChildrenParam'

function TestingParams() {
    return (
        <div className='container'>
            <HeaderSection 
                name = 'Using Props and arguments'
                smallDescription='This example shows how to manage parameters in your react components'
            />
            
            <WelcomeMessage text="Hellow Worlds" myParameter="2nd Param grouped" />
            <WelcomeMessage />
            <WelcomeMessageAlternative param1="1st Individual" param2="2nd Individual" />
            <WelcomeMessageDestructing name="Name Parameter"   />
            <ChildrenParam children={<p>This is a Component Children</p>}/>
        </div>
    )
}

export default TestingParams


/* 
Notes:
This Example shows hoe to send value parameters to the component


*/