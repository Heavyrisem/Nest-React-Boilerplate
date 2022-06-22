import { UserService } from './user.service';
export declare class TodoController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): import("@shared/types/User").User[];
}
