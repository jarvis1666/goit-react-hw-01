import css from '../TransactionHistory/TransactionHistory.module.css'
import clsx from "clsx";

export const TransactionHistory = ({ items }) => {  
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((even, idx) =>
                        <tr className={clsx({[css.whiteRow]: idx%2 === 0, [css.bleckRow]:idx%2 !== 0})} key={even.id}>
                            <td>{ even.type}</td>
                            <td>{ even.amount}</td>
                            <td>{ even.currency}</td>
                        </tr>
                    )
                }                
            </tbody>
        </table>
    )
}