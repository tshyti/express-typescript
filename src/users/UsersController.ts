import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse
} from "tsoa";
import { User } from "./models/User";
import { UsersService, UserCreationParams } from "./UsersService";

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async GetUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return new UsersService().get(userId, name);
  }
}
