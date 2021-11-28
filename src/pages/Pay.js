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
                    <div className="Col Col--9 Col--lg-6 Col--xxl-4 resetCol">
                        <div className="settingsContent"></div>

                        <Card title="Pay">
                            <Card type="inner" title="Contry">
                                <Select
                                    style={{ width: '100%' }}
                                    onChange={handleCountryChange}
                                >
                                    {contryList.map((item, index) => {
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
                            </Card>
                            <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="MemberPrice"
                            >
                                <Radio.Group>
                                    {memberPriceList.map((item, index) => {
                                        return (
                                            <Radio.Button
                                                onChange={onMemberPriceChange}
                                                value={item.type}
                                                key={item.type}
                                            >
                                                {item.type === 0 && 'Single:'}
                                                {item.type === 1 && 'Month:'}
                                                {item.type === 2 && 'Year:'}
                                                {item.price}
                                            </Radio.Button>
                                        );
                                    })}
                                </Radio.Group>
                            </Card>
                            <Card
                                style={{ marginTop: 16 }}
                                type="inner"
                                title="PayType"
                            >
                                <Radio.Group onChange={onPayTypeChange}>
                                    {orderPayInfoList.map((item, index) => {
                                        return (
                                            <Radio.Button
                                                value={item.busiId}
                                                key={item.busiId}
                                            >
                                                {item.busiName}
                                            </Radio.Button>
                                        );
                                    })}
                                </Radio.Group>
                                {orderPayInfoList[orderPayInfoIndex] &&
                                    orderPayInfoList[orderPayInfoIndex]
                                        .bankList && (
                                        <Select
                                            style={{ width: '100%' }}
                                            onChange={handleBankChange}
                                        >
                                            {orderPayInfoList[
                                                orderPayInfoIndex
                                            ].bankList.map((item, index) => {
                                                return (
                                                    <Option
                                                        value={item.code}
                                                        key={item.code}
                                                    >
                                                        {item.bankName}
                                                    </Option>
                                                );
                                            })}
                                        </Select>
                                    )}
                            </Card>
                            <Button
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
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
