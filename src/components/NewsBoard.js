import React, {Component} from "react";
import { Table } from 'react-bootstrap';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import News from "../img/news.png";

export default class Section extends Component{
    constructor(props) {
        super(props);
    }


    openURL(url){
        window.open(url);
    }

    render() {
        return (
            <Container className="corona">
                <hr/>
                <Row>
                    <Col md={12}>
                        <span className="corona-box-desc"><img src={News}/> 최신 보도자료</span>
                    </Col>
                </Row>
                <br/>
                <div className="board board-top-border">
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <th>제목</th>
                            <th>담당 부서</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.NewsData.map((item, index)=> (
                        <tr onClick={(e) => this.openURL(item.link)} key={index}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        );
    }
}