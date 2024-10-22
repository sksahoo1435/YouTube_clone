const Channel = require('../model/ChannelSchema');

exports.AddChannel = async (req, res) => {
    const { channelName, description, channelBanner, subscribers, videos } = req.body;
    const owner = req.user.userId;
    try {
        const newChannel = new Channel({
            channelName,
            description,
            channelBanner,
            subscribers,
            owner,
            videos,
        });

        await newChannel.save();

        return res.status(201).json({
            message: "Channel created successfully",
            channel: newChannel,
        });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
}

exports.getChannel = async (req, res) => {
    try {
        const channels = await Channel.find()
        return res.status(200).json({ message: "Channels Featched Successfully", channel: channels })
    } catch (error) {
        console.error("Error during get Channel:", error);
        return res.status(500).json({ message: 'An unexpected error occurred. Please try again later.', error });
    }
}

exports.getChannelById = async (req, res) => {
    try {
        const id = req.params.id;

        const channel = await Channel.findById(id).populate('owner', 'username avatar');

        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        return res.status(200).json({
            message: "Channel retrieved successfully",
            channel,
        });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while retrieving the channel', error });
    }
}