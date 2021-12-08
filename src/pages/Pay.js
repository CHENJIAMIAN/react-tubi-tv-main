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
    const [CountryList, setCountryList] = useState([]);
    const [memberPriceList, setMemberPriceList] = useState([]);
    const [orderPayInfoList, setOrderPayInfoList] = useState([]);
    const [orderPayInfoIndex, setOrderPayInfoIndex] = useState(0);

    const [memberPriceType, setMemberPriceType] = useState();
    const [busiId, setBusiId] = useState();
    const [bankCode, setBankCode] = useState();
    const [ccyno, setCcyno] = useState();

    useEffect(() => {
        countryList().then((result) => {
            const { data, memberPriceList } = result;
            setCountryList(data);
            const country0 = document.querySelector(`.country-0`);
            country0 && country0.click();
            const member2 = document.querySelector(`.member-2`);
            member2 && member2.click();
        });
    }, []);

    const handleCountryChange = (e) => {
        const value = e.target.value;
        console.log(`handleCountryChange ${value}`);
        const country = CountryList.find((i) => i.id === value);
        orderPayInfo({ countryId: value }).then((result) => {
            setOrderPayInfoList(result.data);
            const mode0 = document.querySelector(`.mode-0`);
            mode0 && mode0.click();
        });

        setMemberPriceList(country.memberPriceList);
        setCcyno(country.ccyno);
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
                {/* <Select
                    style={{ width: '100%' }}
                    onChange={handleCountryChange}
                >
                    {CountryList.length > 0 &&
                        CountryList.map((item, index) => {
                            return (
                                <Option value={item.id} key={item.id}>
                                    {item.name}
                                </Option>
                            );
                        })}
                </Select> */}
                <Radio.Group name="country" buttonStyle="solid">
                    {CountryList.map((item, index) => {
                        return (
                            <Radio.Button
                                onChange={handleCountryChange}
                                value={item.id}
                                key={item.id}
                            >
                                <span className={'country-' + index}>
                                    {item.name}
                                </span>
                            </Radio.Button>
                        );
                    })}
                </Radio.Group>
            </Form.Item>
            {memberPriceList.length > 0 && (
                <Form.Item label="Member">
                    <Radio.Group buttonStyle="solid">
                        <Space direction="vertical">
                            {memberPriceList.map((item, index) => {
                                return (
                                    <Radio.Button
                                        onChange={onMemberPriceChange}
                                        value={item.type}
                                        key={item.type}
                                    >
                                        <span className={'member-' + item.type}>
                                            {`${item.price}${ccyno}`}
                                            {item.type === 0 &&
                                                '  Buy Current Video'}
                                            {item.type === 1 &&
                                                '  One Month Membership'}
                                            {item.type === 2 &&
                                                '  One Year Membership'}
                                        </span>
                                    </Radio.Button>
                                );
                            })}
                        </Space>
                    </Radio.Group>
                </Form.Item>
            )}
            {orderPayInfoList.length > 0 && (
                <Form.Item label="Mode Of Payment">
                    <Radio.Group onChange={onPayTypeChange} buttonStyle="solid">
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '5px',
                            }}
                        >
                            {orderPayInfoList.map((item, index) => {
                                return (
                                    <Radio.Button
                                        value={item.busiId}
                                        key={item.busiId}
                                    >
                                        <span className={`mode-` + index}>
                                            {item.busiName}
                                        </span>
                                    </Radio.Button>
                                );
                            })}
                        </div>
                    </Radio.Group>
                </Form.Item>
            )}
            {orderPayInfoList[orderPayInfoIndex] &&
                orderPayInfoList[orderPayInfoIndex].bankList && (
                    <Form.Item label="Bank">
                        <Radio.Group
                            onChange={handleBankChange}
                            buttonStyle="solid"
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '5px',
                                }}
                            >
                                {orderPayInfoList[
                                    orderPayInfoIndex
                                ].bankList.map((item, index) => {
                                    return (
                                        <Radio.Button
                                            value={item.code}
                                            key={item.code}
                                        >
                                            {item.bankName}
                                        </Radio.Button>
                                    );
                                })}
                            </div>
                        </Radio.Group>
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
                            window.open(result.data.payUrl, '_blank');
                        });
                    }}
                    style={{ marginTop: 16 }}
                >
                    Pay
                </Button>
            </Form.Item>
        </Form>
    );
}
