import React, { Component } from 'react'
import * as axios from 'axios'

export default class View extends Component {
    state = {
        form001: [],
    }
    handleVies = () => {
        console.log("views")
        this.setState(
            axios
                .get('http://localhost:3001/api/form001')
                .then(res => {
                    const { form001 } = res.data
                    this.setState({ form001 })
                })
                .catch(err => {
                    alert('ไม่สามารถโหลดข้อมูลได้!')
                })
                .finally(() => {
                    this.setState({ isLoading: false })
                })
                
        )
        console.log("end views")
    }
    render() {
        const { form001 } = this.state
        return (
            <div>
                Database
                <br></br>
                <button type="button" onClick={this.handleVies}>View</button>
                {form001.o_id}
                {form001.o_no}
                {form001.o_committee1}
            </div>
        )
    }
}