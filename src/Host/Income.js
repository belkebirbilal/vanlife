

export default function Income() {
    const incomes = [
        {price: 720, date: '1/12/22'},
        {price: 560, date: '10/12/22'},
        {price: 980, date: '23/12/22'},
    ]
    return (
        <div style={{backgroundColor: '#FFF7ED', padding: '20px'}} className="transactions">
            <div style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center',marginBottom: '10px'}} className="head">
                <h2>Your transactions (3)</h2>
                <p style={{textDecoration: 'underline',fontSize: '10px'}}>last 30 days</p>
            </div>
            {incomes.map(inc => {
                return (
                    <div
                    style={
                        {
                            backgroundColor: '#FFFFFF',
                            marginBottom: '20px',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }
                    } className="trans">
                        <h1>${inc.price}</h1>
                        <p>{inc.date}</p>
                    </div>
                )
            })}
        </div>
    )
}