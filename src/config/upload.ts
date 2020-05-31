import path from 'path';
// import crypto from 'crypto';
import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      // const fileHash = crypto.randomBytes(10).toString('HEX');

      // pegando a extensão do arquivo
      const [, extension] = file.originalname.split('.');

      // pegando id do user logado
      const { id } = request.user;

      const fileName = `avatar-${id}.${extension}`;

      return callback(null, fileName);
    },
  }),
};
