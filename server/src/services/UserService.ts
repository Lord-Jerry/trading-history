import { User } from '../models';
import { Error } from '../interfaces/Error';

export default class UserService {
    static async getUser(userId: number) {
        const findUser = await User.query().findOne({
            id: userId,
        });

        if (!findUser) {
            const err: Error = new Error();
            err.message = `user with ID ${userId} does not exist`;
            err.status = 404;
            throw err;
        }

        delete findUser.password;
        return findUser;
    }
}
