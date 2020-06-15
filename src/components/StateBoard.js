import React, {Component} from 'react';
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Badge from "react-bootstrap/esm/Badge";
import Logo from "../img/Logo.png";
import State from "../img/State.png";
import Confirm from "../img/confirm.png";
import Cure from "../img/cure.png";
import Death from "../img/death.png";
import Isolation from "../img/isolation.png";
import Switch from "react-bootstrap/esm/Switch";
import CoronaJson from "./CoronaJson";

function numberFormat(inputNumber) {
        return inputNumber;
    }

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let inc_confirm, inc_cure, inc_iso, inc_death = 0;
        inc_confirm = this.props.KoreaData.per_confirm.toFixed(2);
        inc_cure = this.props.KoreaData.per_cure.toFixed(2);
        inc_iso = this.props.KoreaData.per_isolation.toFixed(2);
        inc_death = this.props.KoreaData.per_death.toFixed(2);

        var _Rate = null;
         if (inc_death > 0) {
             _Rate = <Badge variant="danger">{inc_death}% increase</Badge>;
         } else  if(inc_death <= 0){
             _Rate = <Badge variant="success">{inc_death}% increase</Badge>;
         }


        console.log(this.props.CoronaJson);
        return (
            <Container className="corona">
                <Row className="corona-header">
                        <Col xs={12} md={8} className="corona-logo">
                            <h1><img src={Logo}/> COVID-19</h1>
                            <p className="corona-logo-desc">COVID-19 국내 현황판 (source : <a href="http://ncov.mohw.go.kr/">http://ncov.mohw.go.kr/</a>)
                            (<a href="https://spro1.github.io/study_react/">COVID-19 세계 현황판 바로가기</a>)
                            </p>
                            <p className="corona-logo-desc">데이터 업데이트 시간 : {this.props.Update}</p>
                            <CoronaJson CoronaData={this.props.CoronaData}></CoronaJson>
                        </Col>
                </Row>
                <Row className="corona-content">
                    <Col md={12}>
                        <span className="corona-box-desc"><img src={State}/> 국내 COVID-19 현황판</span>
                    </Col>
                    <Col md={6} className="corona-box">
                        <div className="corona-box-wrap">
                            <span className="corona-icon"><img src={Confirm}/></span>
                            <h6 className="font-gray">확진</h6>
                            <h1>{this.props.KoreaData.confirm}</h1>
                            <div className="badge-box">
                                <Badge variant="danger">{inc_confirm}% increase</Badge>
                                <h6 className="badge-desc">+{this.props.KoreaData.new_confirm}</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="corona-box">
                        <div className="corona-box-wrap">
                            <span className="corona-icon"><img src={Cure}/></span>
                            <h6 className="font-gray">완치</h6>
                            <h1>{this.props.KoreaData.cure}</h1>
                            <div className="badge-box">
                                <Badge variant="success">{inc_cure}% increase</Badge>
                                <h6 className="badge-desc">+{this.props.KoreaData.new_cure}</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="corona-box">
                        <div className="corona-box-wrap">
                            <span className="corona-icon"><img src={Isolation}/></span>
                            <h6 className="font-gray">격리</h6>
                            <h1>{this.props.KoreaData.isolation}</h1>
                            <div className="badge-box">
                                <Badge variant="danger">{inc_iso}% increase</Badge>
                                <h6 className="badge-desc">+{this.props.KoreaData.new_isolation}</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="corona-box">
                        <div className="corona-box-wrap">
                            <span className="corona-icon"><img src={Death}/></span>
                            <h6 className="font-gray">사망</h6>
                            <h1>{this.props.KoreaData.death}</h1>
                            <div className="badge-box">
                                {_Rate}
                                <h6 className="badge-desc">+{this.props.KoreaData.new_death}</h6>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} className="corona-box">
                        <div className="corona-box-wrap">
                            <h6 className="font-gray">누적 검사수</h6>
                            <h4>{this.props.KoreaData.complete}</h4>
                        </div>
                    </Col>
                    <Col md={4} className="corona-box">
                        <div className="corona-box-wrap">
                            <h6 className="font-gray">음성</h6>
                            <h4>{this.props.KoreaData.negative}</h4>
                        </div>
                    </Col>
                    <Col md={4} className="corona-box">
                        <div className="corona-box-wrap">
                            <h6 className="font-gray">검사중</h6>
                            <h4>{this.props.KoreaData.testing}</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
