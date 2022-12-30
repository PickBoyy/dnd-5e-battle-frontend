import React, { Fragment } from 'react'
import "./style.css"


type MyProps = {
    className:string,
    type:any,
    name:string,
    value:string|number,
    required:boolean,
    pattern?:any,
    

}

type MyState = {
    value:string|number,
}

class Input extends React.Component <MyProps,MyState>{
    constructor(props:MyProps) {
        super(props)
        this.state = {
            value: ' '
        }
        
    }
    updatingValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value:event.target.value})
    }
    render() {
        return (
            <Fragment>
                <h4 className='label'>{this.props.name}</h4>
                <input
                 type={this.props.type}
                 className={this.props.className}
                 onChange={this.updatingValue}
                 name={this.props.name}
                 value={this.state.value}
                 required={this.props.required} />

            </Fragment>
        )
    }
}

export default Input