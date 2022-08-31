const CreateAccount = () => {
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');

    return (
        <Card 
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ?
                <CtxForm 
                    setShow={setShow}
                    name="Name"
                    email="Email"
                    password="Password"
                    button="Create Account"
                    buttonFunction="newAccount"
                    /> :
                <CreateMsg setShow={setShow}/>}
        />
    )
};

const CreateMsg = (props) => {
    return(<>
        <h5>Success</h5>
        <button type="submit"
            className="btn btn-light"
            onClick={() => props.setShow(true)}>Add another account</button>
    </>)
};

/*
const CreateForm = (props) => {
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const ctx = React.useContext(UserContext);
    const balance = 0
    const handle = () => {
        console.log(name, email, password);
        ctx.users.push({name, email, password, balance});
        props.setShow(false);
    };

    return (<>

        Name<br/>
        <input type="input"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.currentTarget.value)} /><br/>
        
        Email Address<br/>
        <input type="input"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)} /><br/>
        
        Password<br/>
        <input type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)} /><br/>
        
        <button type="submit"
            className="btn btn-light"
            onClick={handle}>Create Account</button>
    </>

    )
}*/