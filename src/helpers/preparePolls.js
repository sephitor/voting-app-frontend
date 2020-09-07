import moment from 'moment'

export const preparePolls = (polls = []) => {

    return polls
        .map(
            (e) => ({
                ...e,
                date: moment(e.date).fromNow(),
            })
        );
}

export const preparePollsTop = (polls = []) => {

    return polls.sort(({ total: previousID }, { total: currentID }) => previousID - currentID)
        .reverse()
        .slice(0, 3)
        .map(
            (e) => ({
                ...e,
                date: moment(e.date).fromNow(),
            })
        );
}