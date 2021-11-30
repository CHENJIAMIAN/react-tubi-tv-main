import './pay.css';
import {
    Select,
    Form,
    Input,
    Checkbox,
    message,
    Button,
    Space,
    Radio,
    Card,
} from 'antd';
import { orderAdd, orderPayInfo, countryList } from 'src/utils/request.js';
import React, { useState, useEffect } from 'react';

const { Option } = Select;

export default function Pay(props) {
    const [contryList, setContryList] = useState([]);
    const [memberPriceList, setMemberPriceList] = useState([]);
    const [orderPayInfoList, setOrderPayInfoList] = useState([]);
    const [orderPayInfoIndex, setOrderPayInfoIndex] = useState(0);

    const [memberPriceType, setMemberPriceType] = useState();
    const [busiId, setBusiId] = useState();
    const [bankCode, setBankCode] = useState();

    useEffect(() => {
        countryList().then((result) => {
            const { data, memberPriceList } = result;
            setContryList(data);
        });
    }, []);

    const handleCountryChange = (value) => {
        console.log(`handleCountryChange ${value}`);
        const contry = contryList.find((i) => i.id === value);
        orderPayInfo({ countryId: value }).then((result) => {
            setOrderPayInfoList(result.data);
        });

        setMemberPriceList(contry.memberPriceList);
    };

    const handleBankChange = (value) => {
        console.log(`handleBankChange ${value}`);
        setBankCode(value);
    };

    const onMemberPriceChange = (e) => {
        console.log('onPayTypeChange', e.target.value);
        setMemberPriceType(e.target.value);
    };

    const onPayTypeChange = (e) => {
        console.log('onPayTypeChange', e.target.value);
        setBusiId(e.target.value);

        const orderPayInfoIndex = orderPayInfoList.findIndex(
            (i) => i.busiId === e.target.value
        );
        setOrderPayInfoIndex(orderPayInfoIndex);
    };

    return (
        <div className="wrapper">
            <div className="Container">
                <div className="Row row">
                    <div className="Col Col--12 Col--lg-6 Col--xxl-4 resetCol">
                        <Card title="Pay" className="pay-card">
                            <Form
                                name="control-hooks"
                                onFinish={(values) => {
                                    console.log('onFinish:', values);
                                }}
                                onFinishFailed={(errorInfo) => {
                                    console.log('onFinishFailed:', errorInfo);
                                }}
                                autoComplete="off"
                            >
                                <Form.Item label="Country">
                                    <Select
                                        style={{ width: '100%' }}
                                        onChange={handleCountryChange}
                                    >
                                        {contryList.length > 0 &&
                                            contryList.map((item, index) => {
                                                return (
                                                    <Option
                                                        value={item.id}
                                                        key={item.id}
                                                    >
                                                        {item.name}
                                                    </Option>
                                                );
                                            })}
                                    </Select>
                                </Form.Item>
                                {memberPriceList.length > 0 && (
                                    <Form.Item label="MemberPrice">
                                        <Radio.Group buttonStyle="solid">
                                            {memberPriceList.map(
                                                (item, index) => {
                                                    return (
                                                        <Radio.Button
                                                            onChange={
                                                                onMemberPriceChange
                                                            }
                                                            value={item.type}
                                                            key={item.type}
                                                        >
                                                            {item.type === 0 &&
                                                                'Single'}
                                                            {item.type === 1 &&
                                                                'Month'}
                                                            {item.type === 2 &&
                                                                'Year'}
                                                            {`(${item.price})`}
                                                        </Radio.Button>
                                                    );
                                                }
                                            )}
                                        </Radio.Group>
                                    </Form.Item>
                                )}
                                {orderPayInfoList.length > 0 && (
                                    <Form.Item label="PayType">
                                        <Radio.Group
                                            onChange={onPayTypeChange}
                                            buttonStyle="solid"
                                        >
                                            {orderPayInfoList.map(
                                                (item, index) => {
                                                    return (
                                                        <Radio.Button
                                                            value={item.busiId}
                                                            key={item.busiId}
                                                        >
                                                            {item.busiName}
                                                        </Radio.Button>
                                                    );
                                                }
                                            )}
                                        </Radio.Group>
                                    </Form.Item>
                                )}
                                {orderPayInfoList[orderPayInfoIndex] &&
                                    orderPayInfoList[orderPayInfoIndex]
                                        .bankList && (
                                        <Form.Item label="Bank">
                                            <Select
                                                style={{ width: '100%' }}
                                                onChange={handleBankChange}
                                            >
                                                {orderPayInfoList[
                                                    orderPayInfoIndex
                                                ].bankList.map(
                                                    (item, index) => {
                                                        return (
                                                            <Option
                                                                value={
                                                                    item.code
                                                                }
                                                                key={item.code}
                                                            >
                                                                {item.bankName}
                                                            </Option>
                                                        );
                                                    }
                                                )}
                                            </Select>
                                        </Form.Item>
                                    )}
                                <Form.Item>
                                    <Button
                                        block
                                        type="primary"
                                        onClick={() => {
                                            orderAdd({
                                                vid: '',
                                                type: memberPriceType, //onMemberPriceChange
                                                busiId, //onPayTypeChange
                                                bankCode, //handleBankChange
                                            }).then((result) => {
                                                window.open(
                                                    result.data.payUrl,
                                                    '_blank'
                                                );
                                            });
                                        }}
                                        style={{ marginTop: 16 }}
                                    >
                                        Pay
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
