import React from 'react';
import axios from 'axios';
import { Input, Select, Form, Button } from 'antd'
import { Table, Divider, Tag } from 'antd';
import { kesbURL } from '../App.js';
import $ from 'jquery'
const Option = Select.Option;
const { Column } = Table;
class Example extends React.Component {
    constructor(props){
        super()
        this.state = {
            data:[]
        };
    }
    componentWillMount() {
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
            .then((res) => {
                this.setState({data:res.data})
                console.log(res);
            })
    }
    onCancel() {
        console.log("关闭")
        let aa = $("#aa").val();
        console.log(aa)
        let values = this.props.form.getFieldsValue();
        console.log(values)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <div>
                    <span className="formPrefix">发票状态</span>
                    {getFieldDecorator('bill_state', {
                        initialValue: '',
                    })(
                        <Select style={{ width: '200px' }}>
                            <Option value="">全部</Option>
                            <Option value="0">申请成功待出票</Option>
                            <Option value="1">开票成功已出票</Option>
                            <Option value="2">开票失败</Option>
                            <Option value="3">开票作废</Option>
                            <Option value="4">全部</Option>
                            <Option value="5">申请成功待出票</Option>
                            <Option value="6">开票成功已出票</Option>
                            <Option value="7">开票失败</Option>
                            <Option value="8">开票作废</Option>
                            <Option value="9">全部</Option>
                            <Option value="10">申请成功待出票</Option>
                            <Option value="11">开票成功已出票</Option>
                            <Option value="12">开票失败</Option>
                            <Option value="13">开票作废</Option>
                            <Option value="14">全部</Option>
                            <Option value="15">申请成功待出票</Option>
                            <Option value="16">开票成功已出票</Option>
                            <Option value="17">开票失败</Option>
                            <Option value="18">开票作废</Option>
                            <Option value="19">全部</Option>
                            <Option value="20">申请成功待出票</Option>
                            <Option value="21">开票成功已出票</Option>
                            <Option value="22">开票失败</Option>
                            <Option value="23">开票作废</Option>
                        </Select>
                    )}
                </div>
                <div>
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div>
                    <Input id="aa" style={{ width: '200px' }} />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={this.onCancel.bind(this)}>关闭</Button>
                </div>
                <div>
                    <Table dataSource={this.state.data}>
                        <Column title="Id" dataIndex="id" key="id"/>
                        <Column title="Name" dataIndex="name" key="name"/>
                        <Column title="Age"  dataIndex="age" key="age"/>
                        <Column title="Sex"  dataIndex="sex" key="sex"/>
                    </Table>
                </div>
            </div>
        )
    }
}
const FormExample = Form.create()(Example)
export default FormExample;