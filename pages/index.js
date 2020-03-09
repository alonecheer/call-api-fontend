
import React, { Component } from 'react'
import * as axios from 'axios'
import Link from 'next/link'

export default class Homepage extends Component {
  state = {
    form001: {
      o_id: 0,
      o_no: '',
      o_date:'',
      o_year:'',
      o_purpose:'',
      o_committee1: '',
      o_committee2: '',
      o_committee3: '',
      o_numdoc:0,
      o_pricedoc:0,
      o_committee4: '',
      o_committee5: '',
      o_committee6: '',
      o_budgetdoc:0,
      o_addprove:'',
      o_addprover:'',
      staff_id:'',
      o_status:'',
      o_status_id:0,
      o_user:'',
    },
    isLoading: false
  }

  handleChange = e => {
    const { name, value } = e.target
    const { form001 } = this.state
    this.setState({
      form001: {
        ...form001,
        [name]: value
      }
    })
  }
  handleSubmit = e => {
    if (e) {
      const { book } = this.state
      const { history } = this.props
      e.preventDefault()
      this.setState(
        {
          isLoading: true
        },
        () => {
          axios
            .post(`http://localhost:3001/api/book`, { book })
            .then(res => {
              const { book } = res.data
              history.push(`/${book.book_id}`)
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
    const { form001, isLoading } = this.state
    return (
      <div>
        <span>ข้อมูลที่ต้องการบันทึก</span>
        <div>
          <Link href="/view">
            <a>Views</a>
          </Link>
        </div>
        {/* ########################################## */}
        <div >
          <label>o_id  => </label>
          <input
            type="number"
            name="o_id"
            value={form001.o_id}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <label>o_no  => </label>
        <input
          type="text"
          name="o_no"
          value={form001.o_no}
          onChange={this.handleChange}
        />
        <div>
          {/* ########################################## */}
          <label>o_date  => </label>
          <input
            type="text"
            name="o_date"
            value={form001.o_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          {/* ########################################## */}
          <label>o_year  => </label>
          <input
            type="text"
            name="o_year"
            value={form001.o_year}
            onChange={this.handleChange}
          />
        </div>
        <div>
          {/* ########################################## */}
          <label>o_purpose  => </label>
          <input
            type="text"
            name="o_purpose"
            value={form001.o_purpose}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <label>o_committee1  => </label>
        <input
          type="text"
          name="o_committee1"
          value={form001.o_committee1}
          onChange={this.handleChange}
        />

        {/* ########################################## */}
        <div>
          <label>o_committee2  => </label>
          <input
            type="text"
            name="o_committee2"
            value={form001.o_committee2}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_committee3  => </label>
          <input
            type="text"
            name="o_committee3"
            value={form001.o_committee3}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_numdoc  => </label>
          <input
            type="number"
            name="o_numdoc"
            value={form001.o_numdoc}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_pricedoc  => </label>
          <input
            type="number"
            name="o_pricedoc"
            value={form001.o_pricedoc}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_committee4  => </label>
          <input
            type="text"
            name="o_committee4"
            value={form001.o_committee4}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_committee5  => </label>
          <input
            type="text"
            name="o_committee5"
            value={form001.o_committee5}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_committee6  => </label>
          <input
            type="text"
            name="o_committee6"
            value={form001.o_committee6}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_budgettype  => </label>
          <input
            type="text"
            name="o_budgettype"
            value={form001.o_budgettype}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_budgetname  => </label>
          <input
            type="text"
            name="o_budgetname"
            value={form001.o_budgetname}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_budgetdoc  => </label>
          <input
            type="number"
            name="o_budgetdoc"
            value={form001.o_budgetdoc}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_addprove  => </label>
          <input
            type="text"
            name="o_addprove"
            value={form001.o_addprove}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_addprover  => </label>
          <input
            type="text"
            name="o_addprover"
            value={form001.o_addprover}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>staff_id  => </label>
          <input
            type="text"
            name="staff_id"
            value={form001.staff_id}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_status  => </label>
          <input
            type="text"
            name="o_status"
            value={form001.o_status}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_status_id  => </label>
          <input
            type="text"
            name="o_status_id"
            value={form001.o_status_id}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        <div>
          <label>o_user  => </label>
          <input
            type="text"
            name="o_user"
            value={form001.o_user}
            onChange={this.handleChange}
          />
        </div>
        {/* ########################################## */}
        {/* ########################################## */}
        <button type="submit">
          บันทึก
				</button>
      </div>
    )
  }
}