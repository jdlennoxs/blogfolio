export default function formatDate(date) {
    const postDate = new Date(date).toDateString();
    return `${postDate.slice(4, 7)} ${postDate.slice(11)}`;
}
