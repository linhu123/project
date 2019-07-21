import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export class HomeItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            imageUrl: this.props.imageUrl
        }
    }
    render() {
        return (
            <div style = {{width:"25%",float:"left",padding:"5px 10px"}}>
                <Card
                    style={{ width: "100"}}
                    cover={
                        <img
                            alt="example"
                            src={this.state.imageUrl}
                        />
                    }
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                        avatar={<Avatar src={this.state.imageUrl} />}
                        title={this.state.title}
                        description="This is the description"
                    />
                </Card>
            </div>
        )
    }
}
export class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [{ title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" },
            { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" },
            { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" },
            { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" },
            { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" },
            { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }, { title: "wuhan", imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563451493046&di=01cc1fb89f9caec9592e892a102ed321&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F20%2F39%2F03f58PICNks_1024.jpg" }]
        }
    }
    render() {
        const data = this.state.data
        return (
            <div style={{display:"inline"}}>
                {data.map(dat => (
                    <HomeItem title={dat.title} imageUrl={dat.imageUrl}></HomeItem>
                ))}
            </div>
        );
    }
}