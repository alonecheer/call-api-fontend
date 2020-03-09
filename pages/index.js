
import React, { Component } from 'react'
import * as axios from 'axios'


export default class Homepage extends Component {
  state = {
		form001: {
			o_id: 0,
			o_no: '',
			o_committee1: 0,

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
  render(){
    const { form001, isLoading } = this.state
    return(
      <div>
          ข้อมูลที่ต้องการบันทึก
          <div className="form-group">
						<label>ชื่อหนังสือ</label>
						<input
							type="text"
							name="o_id"
							placeholder="ชื่อหนังสือ"
							value={form001.o_id}
							onChange={this.handleChange}
						/>
					</div>
          <label>คำอธิบาย</label>
						<input
							type="text"
							name="o_no"
							placeholder="คำอธิบาย"
							value={form001.o_no}
							onChange={this.handleChange}
						/>
            <div>
              <label>ราคา</label>
            <input type="number" 
            name="o_committee1" 
            placeholder="ราคา" 
            value={form001.o_committee1} 
            onChange={this.handleChange} />
            </div>
            <button type="submit" class="btn btn-success">
						บันทึก
					</button>
      </div>
    )
  }
}