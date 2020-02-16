export default function sortPostsByDate(posts) {
    return posts.sort((a, b) => {
        const dateA = new Date(a.attributes.date);
        const dateB = new Date(b.attributes.date);
        if (dateA < dateB) {
            return 1;
        }
        if (dateA > dateB) {
            return -1;
        }
        return 0;
    });
}
