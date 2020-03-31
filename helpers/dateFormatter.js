export default function formatDate(date) {
    const postDate = new Date(date).toDateString();
    return `${dateMap[postDate.slice(4, 7)]} ${postDate.slice(11)}`;
}

const dateMap = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
}
