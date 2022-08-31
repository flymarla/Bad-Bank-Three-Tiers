const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{width: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props-title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div className="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
};

function CtxForm(props){
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [balance, setBalance]     = React.useState(0);
    const [amount, setAmount]       = React.useState(0);
    const ctx = React.useContext(UserContext);

    const newAccount = () => {
        console.log(name, email, password);
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    };

    const depFunds =() => {
        let ind;
        let name;
        let password;
        ctx.users.map((account, index) => {
            if(account.email === email){
                ind = index
                console.log("inside account>>> ", account.name, account.email, account.password);
                name = account.name;
                password = account.password;
                console.log("for depositing funds", name, email, password);
            };
        });
        if(ind >= 0){
            console.log("current balance>>> ", ctx.users[ind].balance);
            console.log("amount to add", amount);
            let currBalance = ctx.users[ind].balance;
            let balance = currBalance + amount;
            ctx.users.splice(ind, 1, {name, email, password, balance});
            props.setShow(false);
        };
    };

    function pickFunction(){
       let choice = props.buttonFunction;
        if(choice === "newAccount"){
            console.log("creating account")
            newAccount();
            return;
        }
        if(choice === "depFunds"){
            console.log("deposit")
            depFunds();
            return;
        }
    };


    return (
        <div className="context-form">
            {props.name && (<>{props.name}<br/><input type="input" className="form-control" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/></>)}
            {props.email && (<>{props.email}<br/><input type="input" className="form-control" placeholder="Enter email" value={email} onChange={e=> setEmail(e.currentTarget.value)}/><br/></>)}
            {props.password && (<>{props.password}<br/><input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e=> setPassword(e.currentTarget.value)}/><br/></>)}
            {props.amount && (<>{props.amount}<br/><input type="number" className="form-control" placeholder="Enter Amount" value={amount} onChange={e=> setAmount(Number(e.currentTarget.value))}/><br/></>)}
            {props.button && (<><button type="submit" className="btn btn-light" onClick={pickFunction} >{props.button}</button></>)}
        </div>
    )
}