function wordCount(body) {
    return body.trim().split(/\s+/).length;
}

export default function calculateTimeToRead(body) {
    const wpm = 200;
    const count = wordCount(body);
    return `${Math.ceil(count / wpm)} min read`;
}
