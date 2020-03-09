import React, { Component } from 'react'

export default class View extends Component {
    state = {
        form001s: [],
        isLoading: true
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
                        const { form001s } = res.data
                        this.setState({ form001s })
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
        const { form001s, isLoading } = this.state
        return (
            <div>
                <tr>
                    <td>{form001s.o_id}</td>
                    <td>{form001s.o_no}</td>
                    <td>{form001s.o_committee1}</td>
                </tr>
            </div>
        )
    }
}