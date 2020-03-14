
import React, { Component } from 'react'
import * as axios from 'axios'
import Link from 'next/link'
export default class Homepage extends Component {
  state = {
    form001: [],
    isLoading: true,
    length:0
  }

  componentDidMount = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        axios
          .get('http://localhost:3001/api/form001')
          .then(res => {
            console.log(res)
            const { form001 } = res.data
            this.setState({ form001 })
            console.log(form001)
          })
          .catch(err => {
            alert('ไม่สามารถโหลดข้อมูลได้!')
          })
          .finally(() => {
            this.setState({ isLoading: false })
          })
      }
    )
  }
  render() {
    const { form001 } = this.state
    return (
      <div>
        Views
        {form001.map(form001 => (<li>{form001.o_id}</li>))}
        {form001.map(form001 => (<li>{form001.o_no }</li>))}
        {form001.map(form001 => (<li>{form001.o_date }</li>))}
        {form001.map(form001 => (<li>{form001.o_year }</li>))}
        {form001.map(form001 => (<li>{form001.o_purpose}</li>))}
        {form001.map(form001 => (<li>{form001.o_committee1   }</li>))}
        {form001.map(form001 => (<li>{form001.o_committee2   }</li>))}
        {form001.map(form001 => (<li>{form001.o_committee3   }</li>))}
        {form001.map(form001 => (<li>{form001.o_numdoc   }</li>))}
        {form001.map(form001 => (<li>{form001.o_pricedoc  }</li>))}
        {form001.map(form001 => (<li>{form001.o_committee4  }</li>))}
        {form001.map(form001 => (<li>{form001.o_committee5   }</li>))}
        {form001.map(form001 => (<li>{form001.o_committee6   }</li>))}
        {form001.map(form001 => (<li>{form001.o_budgettype   }</li>))}
        {form001.map(form001 => (<li>{form001.o_budgetname   }</li>))}
        {form001.map(form001 => (<li>{form001.o_budgetdoc   }</li>))}
        {form001.map(form001 => (<li>{form001.o_approve  }</li>))}
        {form001.map(form001 => (<li>{form001.o_approver  }</li>))}
        {form001.map(form001 => (<li>{form001.staff_id   }</li>))}
        {form001.map(form001 => (<li>{form001.o_status  }</li>))}
        {form001.map(form001 => (<li>{form001.o_status_id   }</li>))}
        {form001.map(form001 => (<li>{form001.o_user   }</li>))}

      </div>
    )
  }
}