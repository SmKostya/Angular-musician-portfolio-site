import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export var result = [" ",];
export class Utils {
    
    public static getAllBeats(resp, params) {
        result = [];
        for (const data of resp.body) {
            result.push(data);
        }
        return result;

    }
    public static getBeatsById(resp, params) {
        result = [];
        for (const data of resp.body) {
            if (params.indexOf(data.id) != -1) {
                result.push(data);
            }
        }
        return result;
    }
}