const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all players
exports.getAllPlayers = async () => {
    return await prisma.manutdplayers.findMany();
}


exports.filterAndSortPlayers = async (sort, order, positionReq) => {
    const where = {};
    if (positionReq.length > 0) {
        where.position = {
            in: positionReq
        };
    }

    return await prisma.manutdplayers.findMany({
        where,
        orderBy: {
            [sort]: order
        }
    });
}


exports.createNewPlayer= async(Pname,Salary,Age,Height,Career,Position,Avg_speed,Weight,Market_value,imgPath )=>{
    await prisma.manutdplayers.create({
        data:{
            name:Pname,
            salary:Salary,
            age:Age,
            height:Height,
            career:Career,
            position:Position,
            avg_speed:Avg_speed,
            weight:Weight,
            market_value:Market_value,
            ImagePath:imgPath
        }
    });

}

