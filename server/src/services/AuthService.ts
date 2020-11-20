import bcrypt from 'bcryptjs';
import { User } from '../models';
import { UserInterface } from '../interfaces/User';
import { Error } from '../interfaces/Error';
import { encodeToken } from '../helpers/token';

export default class AuthService {
    static async createAccount(userDetails: UserInterface) {
        const { email, password } = userDetails;

        const findUser = await User.query().findOne({
            email,
        });

        if (findUser) {
            const err: Error = new Error();
            err.message = `user with email ${email} already exists`;
            err.status = 400;
            throw err;
        }

        const createUser = await User.query().insert({
            ...userDetails,
            password: bcrypt.hashSync(password, 10),
            active: true,
            social: false,
        });
        delete createUser.password;

        const token = encodeToken((createUser as UserInterface));

        return {
            user: createUser,
            token,
        };
    }

    static async loginUser(userDetails: UserInterface) {
        const { email, password } = userDetails;

        const findUser = await User.query().findOne({
            email,
        });

        if (!findUser) {
            const err: Error = new Error();
            err.message = 'Invalid user details';
            err.status = 401;
            throw err;
        }

        const comparePassword = await bcrypt.compare(password, (findUser.password as string));
        if (!comparePassword) {
            const err: Error = new Error();
            err.message = 'Invalid user details';
            err.status = 401;
            throw err;
        }

        delete findUser.password;

        const token = encodeToken((findUser as UserInterface));

        return {
            user: findUser,
            token,
        };
    }
}
