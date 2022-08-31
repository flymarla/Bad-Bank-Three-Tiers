const Deposit = () => {
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');

    return (
        <Card 
            bgcolor="info"
            header="Deposit"
            status={status}
            body={show ?
                <CtxForm
                    setShow={setShow}
                    email="Email"
                    amount="Amount to Deposit"
                    button="Make Deposit"
                    buttonFunction="depFunds"
                    /> :
                <CreateMsg setShow={setShow}/>}
        />
    )
};

const CreateMsg = (props) => {
    return(<>
        <h5>Deposit Success</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => props.setShow(true)}>Make Another Deposit</button>
    </>)
};