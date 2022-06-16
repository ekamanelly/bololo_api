import { Injectable } from '@nestjs/common';
import cloudinary from 'src/uitilities/cloudinary.service';

const streamifier = require('streamifier')

@Injectable()
export class ImageService {
  saveImageTOCloudinary(
     file:Express.Multer.File){
      return new Promise((resolve, reject) => {
          let stream = cloudinary.uploader.upload_stream( {public_id:this.customFileName(file),  use_filename:true , unique_filename:false},
            (error, result) => {
              if (result) {
                resolve(result);
              } else {
                reject(error);
              }
            }
          );

        streamifier.createReadStream(file.buffer).pipe(stream);
      });
  };
  
  
   customFileName(file) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // let fileExtension = '';
    // if (file.mimetype.indexOf('jpeg') > -1) {
    //   fileExtension = 'jpg';
    // } else if (file.mimetype.indexOf('png') > -1) {
    //   fileExtension = 'png';
    // }
    return 'Gadolin' + '-' + uniqueSuffix 
  }



}
