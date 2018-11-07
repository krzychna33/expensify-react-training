import moment from 'moment'
// Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().search(text.toLowerCase()) >= 0;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            if(a.createdAt < b.createdAt){
                return 1;
            } else {
                return -1;
            }
        } else if (sortBy === 'amount'){
            if(a.amount < b.amount){
                return 1;
            } else {
                return -1;
            }
        }
    })
};