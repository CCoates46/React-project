import React from 'react';
import './Snippets.css'

const Snippet = (props) => {
    return (
        <div>
            <p className='SnippetTitle'><strong>{props.title}</strong></p>
            <p className='SnippetPara'>{props.paragraph1}</p>
            <p className='SnippetPara2'>{props.paragraph2}</p>
            <a href={props.link}> </a>
        </div>    
    )
}

export default Snippet