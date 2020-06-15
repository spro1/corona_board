import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'
import React, {Component} from "react";
import City from "../img/city.png";


const columns = [{
    dataField: 'city',
    text: '도시명',
    sort: true
}, {
    dataField: 'confirm',
    text: '확진자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}, {
    dataField: 'death',
    text: '사망자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}, {
    dataField: 'cure',
    text: '완치자',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
},{
    dataField: 'isolation',
    text: '격리',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
},{
    dataField: 'new_confirm_f_o',
    text: '신규 확진자(해외 유입)',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    headerStyle: (colum, colIndex) => {
          return { width: '18%' };
    }
},,{
    dataField: 'new_confirm_f_d',
    text: '신규 확진자(지역 감염)',
    sort: true,
    formatter: (cell) => {
        return cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    headerStyle: (colum, colIndex) => {
          return { width: '18%' };
    }
}
];

export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Container className="corona">
                <hr/>
                <Row className="corona-content">
                    <Col md={12}>
                        <span className="corona-box-desc"><img src={City}/> 도시 별 COVID-19 현황</span>
                    </Col>
                </Row>
                <ToolkitProvider
                keyField="id"
                data={ this.props.CityData }
                columns={ columns }
                search
            >
            {
                props => (
                <div>
                    <br />
                    <BootstrapTable
                        striped
                        hover
                        { ...props.baseProps }
                        sort={{ dataField: 'confirm', order: 'desc' }}
                    />
                </div>
                )
            }
            </ToolkitProvider>
            </Container>
        )
    }
}
