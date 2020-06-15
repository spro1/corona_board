import React, {Component, useState} from 'react';
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
export default class CoronaJson extends Component {
    constructor(props){
            super(props);
            this.state = {
                show : false
            }
            this.handleClose = this.handleClose.bind(this);
            this.handleShow = this.handleShow.bind(this);
        }
        handleClose(){
            this.setState(state => ({
                show : false
            }));
        }
        handleShow(){
            this.setState(state => ({
                show : true
            }));
        }
    render(){
        const hover={
            cursor:"pointer"
        }
        return(
            <div>
                <p style={hover} onClick={this.handleShow}>
                    사용 데이터 보기
                </p>

                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>코로나 JSON 데이터</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{JSON.stringify(this.props.CoronaData, null, 2)}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}