import axios from 'axios';
import { Strings } from '../utilities/String';

 export default axios.create({
    baseURL: Strings.BASE_URL,
});

