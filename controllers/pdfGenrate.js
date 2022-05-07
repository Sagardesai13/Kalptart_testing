var QRCode = require('qrcode');
const client = require('../models/client');
const karigar = require('../models/karigar');
const order = require('../models/order');
const fs = require("fs");
const dotenv = require('dotenv');
const pdf = require("pdf-creator-node");
const path = require("path");
dotenv.config();
const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '2mm',
    footer: {
        height: '10mm',
        contents: {
            first: 'Powered By: Shree Kalptaru',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
        }
    }
}
const serverURL = process.env.serverURL;
const clientURL = process.env.clientURL;

const generateQR = async (text, id) => {
    try {
        const filename = id + '_qr.png';
        QRCode.toFile('./uploads/qrcode/' + filename, text);
    } catch (err) {
        console.log(err);
    }
}

exports.pdfGenerate = (id) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/template.html'), 'utf-8');

    // const {id}=req.body;

    order.findOne({ _id: id })
        .populate(
            [{
                path: 'clientId',
                model: 'client',
                select: 'client_name client_contact '
            },
            {
                path: 'karigarId',
                model: 'karigar',
                select: 'karigar_name karigar_contact'
            },
            {
                path: 'createdby',
                model: 'user',
                select: 'fullname'
            },
            {
                path: 'orderCategory',
                model: 'category',
                select: 'name'
            }]
        )
        .select('refNo quantity weightFrom weightTo deliveryDate melting priority HUID orderType orderStatus')
        .lean()
        .exec((err, data) => {
            if (err) {
                console.log("PDF generate error");
            }
            if (data) {

                const text = `${clientURL}/orderView/${data._id}`
                generateQR(text, data._id)
                const qrcodename = `${serverURL}/uploads/qrcode/${data._id}` + '_qr.png'
                // hope for the best
                console.log(qrcodename);
                const filename = data._id + '_order' + '.pdf';
                const ansObj = {
                    data1: data,
                    qrcode: qrcodename
                }
                const document = {
                    html: html,
                    data: {
                        orderData: ansObj
                    },
                    path: './uploads/pdf/' + filename
                }

                pdf.create(document, options)
                    .then(res => {
                        console.log("PDF generated successfully!");
                    }).catch(error => {
                        console.log("PDF creation error!");
                    });
            }
        })
}