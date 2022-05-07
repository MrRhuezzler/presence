const pong = async (req, res) => {
    return res.status(200).json({ 'message': 'pong' });
}

export { pong };