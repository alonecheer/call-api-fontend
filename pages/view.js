import React, { Component } from 'react'
import * as axios from 'axios'
import Link from 'next/link'
export default class View extends Component {
    state = {
        form001s: [],
    }
    handleVies = () => {
        console.log("views")
        this.setState(
            axios
                .get('http://localhost:3001/api/form001')
                .then(res => {
                    const { form001s } = res.data
                    this.setState({ form001s })
                })
                .catch(err => {
                    alert('ไม่สามารถโหลดข้อมูลได้!')
                })             
        )
        console.log("end views")
    }
    render() {
        const { form001s } = this.state
        return (
            <div>
                Database
                <br></br>
                <button type="button" onClick={this.handleVies}>View</button>
                <Link href="/">
            <a>Homepage</a>
          </Link>
          {
							form001s.length !== 0 &&
							form001s.map(form001 => (
								<tr>
									<td>{form001.o_id}</td>
									<td>{form001.o_no}</td>
								</tr>
							))}
            </div>
        )
    }
}