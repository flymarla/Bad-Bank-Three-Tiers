function Spa() {
    return (
    <>
    <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{users:[{name: 'pitch', email: 'pitch@cat.com', password: 'secret', balance: 0}]}}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/" exact           component={Home} />
                    <Route path="/createAccount/"   component={CreateAccount} />
                    <Route path="/login"            component={Login} />
                    <Route path="/deposit"          component={Deposit} />
                    <Route path="/balance"          component={Balance} />
                    <Route path="/withdraw"         component={Withdraw} />
                    <Route path="/alldata"          component={AllData} />
                </div>
            </UserContext.Provider>
        </div>
    </HashRouter>
    </>)
};

ReactDOM.render(<Spa/>,
    document.getElementById('root'));