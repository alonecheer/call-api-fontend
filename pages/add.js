import React, { Component } from 'react'
import * as axios from 'axios'
import Link from 'next/link'
export default class Add extends Component {
    state = {
        form001: {
            o_id: 0,
            o_no: " ",
            o_date: " ",
            o_year: " ",
            o_purpose: " ",
            o_committee1: " ",
            o_committee2: " ",
            o_committee3: " ",
            o_numdoc: 0,
            o_pricedoc: 0,
            o_committee4: " ",
            o_committee5: " ",
            o_committee6: " ",
            o_budgettype: " ",
            o_budgetname: " ",
            o_budgetdoc: 0,
            o_approve: " ",
            o_approver: " ",
            staff_id: 0," ",
            o_status: " ",
            o_status_id: " ",
            o_user: " ",
        },
        isLoading: false
    }
    handleChange = e => {
        const { name, value } = e.target
        const { form001 } = this.state
        this.setState({
            form001: {
                ...form001s,
                [name]: value
            }
        })
    }
    handleSubmit = e => {
        if (e) {
            const { form001 } = this.state
            const { history } = this.props
            e.preventDefault()
            this.setState(
                {
                    isLoading: true
                },
                () => {
                    axios
                        .post(`http://localhost:3001/api/form001`, { form001 })
                        .then(res => {
                            const { form001 } = res.data
                            history.push(`/${form001.o_id}`)
                        })
                        .catch(err => {
                            alert('กรุณากรอกข้อมูลให้ครบถ้วน!')
                        })
                        .finally(() => {
                            this.setState({ isLoading: false })
                        })
                }
            )
        }
    }


    render() {
        const { form001s } = this.state
        return (
            <div>
                <Link href="/">
                    <a>Homepage</a>
                </Link>
                <input
                    type="text"
                    name="o_id"
                    value={book.title}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

