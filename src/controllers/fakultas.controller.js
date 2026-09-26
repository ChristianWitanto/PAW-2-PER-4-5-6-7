import { apiResponse } from "../utils/response.js";

class FakultasController {
    static async index(req,res) {
        return apiResponse({
            res,
            status : 200,
            message : "List Fakultas",
            data : [{
                name : "Sistem Informasi"
            }]
        })
    }
    static async show(req,res) {
        const fakultasId = req.params.id;
        return apiResponse({
            res,
            status : 200,
            message : "Detail Fakultas",
            data : [{
                "name" : "Sistem Informasi"
            }]
        })
    }
}

export default FakultasController;