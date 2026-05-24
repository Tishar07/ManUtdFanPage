const playerService = require("../services/playerService");

// GET /api/users
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await playerService.getAllPlayers();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getFilterPlayers = async (req,res)=>{
    try{
        const { sort,order,position } = req.body;
        const result = await playerService.filterAndSortPlayers(sort,order,position);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};


exports.createPlayer= async(req,res)=>{
    try{
    const {
        Pname,
        Salary,
        Age,
        Height,
        Career,
        Position,
        Avg_speed,
        Weight,
        Market_value,
        imgPath
    } = req.body;

        if (!Pname || !Salary || !Age || !Height || !Position) {
            return res.status(400).json({
                message: "Pname, Salary, Age, Height, and Position are required!"
            });
        }

        if (typeof Pname !== "string" || Pname.trim().length < 2) {
            return res.status(400).json({ message: "Invalid player name!" });
        }

        if (typeof Position !== "string" || Position.trim().length < 2) {
            return res.status(400).json({ message: "Invalid position!" });
        }

        if (Career && typeof Career !== "string") {
            return res.status(400).json({ message: "Career must be a string!" });
        }

        const isInvalidNumber = (value) =>
            value === undefined || value === null || isNaN(value);

        if (isInvalidNumber(Salary) || Salary < 0) {
            return res.status(400).json({ message: "Salary must be a positive number!" });
        }

        if (isInvalidNumber(Age) || Age < 0 || Age > 60) {
            return res.status(400).json({ message: "Age must be between 0 and 60!" });
        }

        if (isInvalidNumber(Height) || Height < 1 || Height > 2.5) {
            return res.status(400).json({ message: "Height must be between 1.0 and 2.5 meters!" });
        }

        if (Weight != null && (isNaN(Weight) || Weight < 30 || Weight > 200)) {
            return res.status(400).json({ message: "Weight must be between 30 and 200 kg!" });
        }

        if (Avg_speed != null && (isNaN(Avg_speed) || Avg_speed < 0)) {
            return res.status(400).json({ message: "Average speed must be a positive number!" });
        }

        if (Market_value != null && (isNaN(Market_value) || Market_value < 0)) {
            return res.status(400).json({ message: "Market value must be positive!" });
        }

        if (imgPath && typeof imgPath !== "string") {
            return res.status(400).json({ message: "Invalid image path!" });
        }
        
        const result = await playerService.createNewPlayer(
            Pname,
            Salary,
            Age,
            Height,
            Career,
            Position,
            Avg_speed,
            Weight,
            Market_value,
            imgPath
        );
        
        res.status(200).json({message:"Player Created Successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
    }
};