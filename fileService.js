import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFile(file){
        try{
            const fileName = uuid.v4() + '.jpg'; //creating filename
            const filePath = path.resolve('static', fileName); // getting file path
            file.mv(filePath);
            return fileName;
        }catch(e){
            console.log(e)
        }
        
    }
}

export default new FileService();