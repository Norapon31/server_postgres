const { mockup_productUniq,mockup_productDetail,mockup_category1s,mockup_category2s } = require('../models');
const { Op } = require("sequelize");

const createProduct = async (req, res) => {
    try {

        console.log(req.body)
        return res.status(201).json(
            req.body,
        );    
        /* const category = await mockup_category1s.create(req.body);
        return res.status(201).json({
            category,
        }); */
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllproduct = async (req, res) => {
    try {
        const category = await mockup_category2s.findAll({
            where: { lng: { [Op.like]: `%${"th"}%` }, categorytype_name: { [Op.like]: `%${"ออร์แกนิค"}%` }}, ////fillter condition
            include: [
                {
                    where: { lng: { [Op.like]: `%${"th"}%` }/* , categoryid: { [Op.like]: `%${"CatID_1"}%` } */}, ////fillter condition
                    model: mockup_category1s,
                    as:'cat1',
                    include:[
                        {
                            model: mockup_productDetail,
                            as: 'productdetail',
                            include:[
                                {
                                    model: mockup_productUniq,
                                    as: 'productuniq'
                                }
                            ]
                        }
                    ]
                }
            ]
        });


        return res.status(200).json({category});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getProductById = async (req, res) => {
    try {
        console.log(req.params)
        const { sku } = req.params;
        const product = await mockup_productDetail.findOne({
            where: { sku: sku }
        });
        if (product) {
            return res.status(200).json({ product });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createProduct,
    getAllproduct,
    getProductById
}