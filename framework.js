function expect(actual) {
    return {
        toBe(expect) {
            if (actual !== expect) {
                throw new Error('Unsuccesful test');
            }
        }
    }
}

function it(title, callback) {
    try {
        callback();
        console.log(`✔️ ${title}`);
    } catch {
        console.error(`✕ ${title}`);
    }
}